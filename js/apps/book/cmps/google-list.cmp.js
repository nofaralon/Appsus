import gPreview from '../cmps/google-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <ul class="google-list">
            <li  v-for="book in books" :key="book.id" >
                <g-preview :book="book" />
            </li>
            
        </ul>
    `,
    methods: {

    },
    components: {
        gPreview
    }
};