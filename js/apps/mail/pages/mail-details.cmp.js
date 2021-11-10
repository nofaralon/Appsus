import { mailsService } from '../../mail/service/mail-service.js';
// import mailList from '../apps/mail/cmps/mail-list.cmp.js'
// import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'



export default {
    template: `
    <section v-if="mail" class="mail-details">
        <div>{{mail.subject}}</div>
        <div>{{mail.to}}</div>
        <div>{{mail.body}}</div>
        <div>{{mail.sentAt}}</div>
        </div>

        <button @click="goToList" >Go Back</button>
    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        const { mailId } = this.$route.params;
        mailsService.getById(mailId)
            .then(mail => this.mail = mail);
    },
    methods: {
        goToList() {
            this.$router.push('/mail')
        }



    },
    computed: {

    },
    components: {

    }
};