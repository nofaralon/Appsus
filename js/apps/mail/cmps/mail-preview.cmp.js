export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <table class="reviews-container">
            <tbody>
                <tr>
                    <td>{{mail.to}}</td>
                    <td>{{mail.subject}} - {{txt}}</td>
                    <td>{{mail.sentAt}}</td>
                </tr>
            </tbody>
        </table>
           
    </section>
    `,
    computed: {
        txt() {
            const txt = this.mail.body
            if (txt.length > 50) return txt.substr(0, 50) + '...'
            return txt
        },


    },
}