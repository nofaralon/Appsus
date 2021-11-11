import { mailsService } from '../apps/mail/service/mail-service.js';
import mailList from '../apps/mail/cmps/mail-list.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'
import mailSideBar from '../apps/mail/cmps/mail-side-bar.cmp.js'
import newMail from '../apps/mail/cmps/new-mail.cmp.js'




export default {
    template: `
    <section class="mail-app">
        <mail-filter  @filtered="setFilter" />
        <mail-side-bar @new="open"></mail-side-bar>
        <new-mail v-if="isNewMail" @addNewMail="addMail"></new-mail>
        <mail-list v-if="!isNewMail":mails="mailsToShow"/>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isNewMail: false
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
                    console.log(this.mails);
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        open() {
            this.isNewMail = !this.isNewMail
        }


    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            if (this.filterBy.isRead === 'all') return this.mails;

            const searchStr = this.filterBy.subject.toLowerCase();
            var read = this.filterBy.isRead

            const filterMail = this.mails.filter(mail => {
                return mail.subject.toLowerCase().includes(searchStr) && mail.isRead.toString() === read
            })

            return filterMail;
        },

        addMail() {
            this.isNewMail = !this.isNewMail
        }

    },
    components: {
        mailList,
        mailFilter,
        mailSideBar,
        newMail
    }
};