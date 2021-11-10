// import { mailsService } from '../apps/mail/service/mail-service.js';
// import mailList from '../apps/mail/cmps/mail-list.cmp.js'
// import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'



export default {
    template: `
    <section v-if="mail" class="mail-details">
        <div>hi</div>
    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        // const { mailId } = this.$route.params;
        // mailsService.getById(mailId)
        //     .then(mail => this.mail = mail);
    },
    methods: {



    },
    computed: {

    },
    components: {

    }
};