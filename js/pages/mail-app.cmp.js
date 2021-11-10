import { mailsService } from '../apps/mail/service/mail-service.js';
import mailList from '../apps/mail/cmps/mail-list.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'



export default {
    template: `
    <section class="mail-app">
        <mail-filter  @filtered="setFilter" />
        <mail-list  :mails="mailsToShow"/>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null
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
        }

    },
    components: {
        mailList,
        mailFilter
    }
};