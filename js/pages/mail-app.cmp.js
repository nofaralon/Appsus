import { mailsService } from '../apps/mail/service/mail - service.js';
import mailList from '../apps/mail/cmps/mail-list.cmp.js'



export default {
    template: `
    <section class="mail-app">
        <!-- <mail-filter  @filtered="setFilter" /> -->
        <mail-list  :mails="mails"/>
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
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },


    },
    computed: {
        // booksToShow() {
        //     if (!this.filterBy) return this.books;

        //     const searchStr = this.filterBy.title.toLowerCase();
        //     const minPrice = (this.filterBy.minPrice) ? this.filterBy.minPrice : 0
        //     const maxPrice = (this.filterBy.maxPrice) ? this.filterBy.maxPrice : Infinity

        //     const filterBook = this.books.filter(book => {
        //         return book.title.toLowerCase().includes(searchStr) && book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice
        //     })

        //     return filterBook;
        // }

    },
    components: {
        mailList
    }
};