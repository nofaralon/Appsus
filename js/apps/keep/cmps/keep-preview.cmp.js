import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"

export default {
    props: ['keep'],
    template:`
    <section v-if="cmpType">
        <component :is="cmpType" :keep="keep" :style="style"></component>
    </section>
    `,
    data(){
        return{
            cmpType:null,
            isPinned: false,
            style:null
        }
    },
    created(){
        this.cmpType=this.keep.type
        this.isPinned=this.keep.isPinned || false
    },
    methods:{
        },
        components:{
            noteTxt,
            noteImg,
            noteTodos,
        }
}