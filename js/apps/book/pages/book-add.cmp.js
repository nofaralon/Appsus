import { booksService } from '../service/books-service.js';
import googleList from '../cmps/google-list.cmp.js'


export default {
    template: `
        <div class="book-add">
        
        <form @submit.prevent= "search">
            <h3>Search for a new book</h3>
            <label>Search: 
                <input v-model.lazy="searchVal" type="search" placeholder="Search...">
            </label>
            <button>search</button>
        </form>
        <google-list v-if="googleBooks.length" :books="googleBooks"></google-list>

        </div>
    `,
    data() {
        return {
            searchVal: ' ',
            googleBooks: []

        };
    },
    methods: {
        search() {
            booksService.getGoogleBooks(this.searchVal)
                .then((res) => {
                    return this.googleBooks = res.data.items
                })
        }


    },
    components: {
        googleList
    }
}