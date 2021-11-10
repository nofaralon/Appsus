import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"

export default {
    props: ['keep'],
    template: `
    <section v-if="cmpType">
        <component :is="cmpType" :keep="keep" :style="style"></component>
    </section>
    `,
    data() {
        return {
            cmpType: null,
            isPinned: false,
            <<
            << << < HEAD
            info: [],
            style: {},
            style: null

        }
    },
    created() {
        this.cmpType = this.keep.type.split("-")[1]
        this.isPinned = this.keep.isPinned || false
        this.style = this.keep.style || null
        this.setType()

    },
    methods: {
        setType() {
            if (this.cmpType === 'txt') {
                this.info = this.keep.info.txt
                console.log(this.info);
            } else if (this.cmpType === 'img') {
                this.info = {
                    title: this.keep.info.title,
                    url: this.keep.info.url
                }
            } else {

            }
            console.log(this.info);
        }
    }



    ===
    === =
    style: null
}
},
created() {
        this.cmpType = this.keep.type
        this.isPinned = this.keep.isPinned || false
    },
    methods: {},
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    } >>>
    >>> > e6e83080897893ce949e35267c3abe760cd8b6e9
}