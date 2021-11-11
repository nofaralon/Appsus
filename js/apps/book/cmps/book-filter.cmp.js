export default {
    template: `
        <div class="book-filter">
            <label>Search: </label>
            <input @input="filter" v-model="filterBy.title" type="text" placeholder="Search...">
            <input @input="filter" v-model.number="filterBy.minPrice" type="number" placeholder="Min Price">
            <input @input="filter" v-model.number="filterBy.maxPrice" type="number" placeholder="Max Price">
        </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0,
                maxPrice: Infinity,
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}