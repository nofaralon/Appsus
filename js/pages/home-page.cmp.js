export default {
    template: `
        <section class="home-page">
            <h3>Welcome</h3>
            <div  @click="openMail">Mail</div>
            <div  @click="openKeep">Keep</div>
            <div  @click="openBook">Book</div>
        </section>
    `,
    methods: {
        openMail() {
            this.$router.push('/mail')
        },
        openKeep() {
            this.$router.push('/keep')
        },
        openBook() {
            this.$router.push('/book')
        }
    }
}