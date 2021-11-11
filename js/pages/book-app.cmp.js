import { booksService } from '../apps/book/service/books-service.js';
import booksList from '../apps/book/cmps/books-list.cmp.js';
import bookFilter from '../apps/book/cmps/book-filter.cmp.js';


export default {
    template: `
    <section class="book-app">
        <book-filter  @filtered="setFilter" />
        <books-list  :books="booksToShow"/>
    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: null
        }
    },
    created() {
        this.loadBooks();

    },
    methods: {
        loadBooks() {
            booksService.query()
                .then(books => {
                    this.books = books
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },


    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;

            const searchStr = this.filterBy.title.toLowerCase();
            const minPrice = (this.filterBy.minPrice) ? this.filterBy.minPrice : 0
            const maxPrice = (this.filterBy.maxPrice) ? this.filterBy.maxPrice : Infinity

            const filterBook = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) && book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice
            })

            return filterBook;
        }

    },
    components: {
        booksList,
        bookFilter
    }
};