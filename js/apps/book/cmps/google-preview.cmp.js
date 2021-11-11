export default {
    props: ['book'],
    template: `
        <div class="google-preview">
            <h3 class="book-title"> {{book.volumeInfo.title}}  </h3>
            
        </div>
    `,
    created() {
        console.log(this.book);
    },
    computed: {


    },
}