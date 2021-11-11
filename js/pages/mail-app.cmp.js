import { mailsService } from '../apps/mail/service/mail-service.js';
import mailList from '../apps/mail/cmps/mail-list.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'
import mailSideBar from '../apps/mail/cmps/mail-side-bar.cmp.js'
import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import { eventBus } from '../service/event-bus-service.js';



export default {
    template: `
    <section class="mail-app">
        <mail-filter  @filtered="setFilter" />
        <div class="mail-app-container">
            <mail-side-bar  @new="open"></mail-side-bar>
            <new-mail v-if="isNewMail" @addNewMail="addMail"></new-mail>
            <mail-list @staredMail="setMailStared" @removeMail="moveToRecycleBin" @read="updateMail" v-if="!isNewMail" :mails="mailsToShow"/>

        </div>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isNewMail: false,
            sideBar: null,
            filteredMails: null

        }
    },
    created() {
        this.loadMails();

    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => {
                    this.mails = mails
                    return this.mails
                        // var filterMail = this.mails.filter(mail => {
                        //     return !mail.isRemoved
                        // })
                        // this.filteredMails = filterMail
                        // return filterMail

                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setSideBar(filter) {
            this.sideBar = filter;
        },
        open() {
            this.isNewMail = !this.isNewMail
        },
        addMail(newMail) {
            console.log(newMail);
            this.isNewMail = !this.isNewMail
            mailsService.addNewMail(newMail)
                .then(() => {
                    this.loadMails()
                    const msg = {
                        txt: 'you mail sent succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        moveToRecycleBin(mailId) {
            mailsService.moveToRecycleBin(mailId)
                .then((mail) => {
                    console.log(mail);
                    this.loadMails()
                    const msg = {
                        txt: 'you mail move to recycle bin',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        setMailStared(mailId) {
            mailsService.setMailStared(mailId)
                .then((mail) => {
                    console.log(mail);
                    this.loadMails()
                    const msg = {
                        txt: 'you mail move to recycle bin',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        updateMail(mailId) {
            mailsService.updateMail(mailId)
                .then(() => {
                    this.loadMails()
                })

        }


    },
    computed: {

        mailsToShow() {
            if (!this.filterBy) return this.mails;
            if (this.filterBy.isRead === 'all') return this.mails;

            const searchStr = this.filterBy.subject.toLowerCase();
            var read = this.filterBy.isRead


            const filterMail = this.mails.filter(mail => {
                // console.log(mail.subject.toLowerCase());
                return mail.subject.toLowerCase().includes(searchStr)
                    // && mail.isRead.toString() === read
            })


            const nofar = filterMail.filter(mail => {
                // console.log(typeof(mail.isRead.toString()));
                console.log(read);
                return mail.isRead.toString() === read
            })


            return nofar;
        },
        search() {

            if (this.sideBar === 'inbox') {
                var filterMail = this.mails.filter(mail => {
                    return !mail.isRemoved
                })
            } else if (this.sideBar === 'stared') {
                var filterMail = this.mails.filter(mail => {
                    return !mail.isRemoved
                })
            } else if (this.sideBar === 'trash') {
                var filterMail = this.mails.filter(mail => {
                    return mail.isRemoved
                })
            }

            this.filteredMails = filterMail
            this.search()

            return filterMail
        }


    },
    components: {
        mailList,
        mailFilter,
        mailSideBar,
        newMail
    }
};