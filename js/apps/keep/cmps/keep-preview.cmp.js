import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVid from "./note-video.cmp.js"

export default {
    props: ['keep'],
    template:`
    <section v-if="cmpType">
    <button @click="removeKeep">X</button>
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
        removeKeep(){
            this.$emit('remove',this.keep.id);
        }
        },
        components:{
            noteTxt,
            noteImg,
            noteTodos,
            noteVid
        }
}