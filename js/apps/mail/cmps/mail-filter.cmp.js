export default {
    template: `
        <div class="mail-filter">
            <label>Search: 
                <input @input="filter" v-model="filterBy.subject" type="search" >
            </label>
            <select v-model="filterBy.read">
                <option>Read</option>
                <option>Unread</option>
            </select>
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                read: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });

        }
    }
}