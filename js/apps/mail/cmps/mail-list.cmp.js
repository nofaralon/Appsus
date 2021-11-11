import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
        <section class="mail-list">

        <div  v-for="mail in mails" :key="mail.id" >
            <mail-preview :mail="mail" />
        </div>

        </section>
    `,
    methods: {

    },
    components: {
        mailPreview
    }
};