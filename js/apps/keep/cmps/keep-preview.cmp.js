import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVid from "./note-video.cmp.js"
import { keepService } from "../service/keep-service.js"

export default {
    props: ['keep'],
    template:`
    <section v-if="cmpType">
    <button @click="removeKeep">X</button>
        <component :is="cmpType" :keep="keep" :style="style"></component>
        <input type="color" v-model=style.backgroundColor>
        <input list="fonts" type='text' v-model=style.fontFamily>
        <svg @click="setPinned" aria-hidden="true" focusable="true" data-prefix="fas" data-icon="thumbtack" :class="pinned" class="svg-inline--fa fa-thumbtack fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"></path></svg>

        <datalist id="fonts">
            <option>Impact,Charcoal,sans-serif</option>
            <option>Arial, Helvetica, sans-serif</option>
            <option>Verdana, Tahoma, sans-serif</option>
            <option>Georgia, Times New Roman, Times, serif</option>
        </datalist>
    </section>
    `,
    data(){
        return{
            cmpType:null,
            style:{
                backgroundColor:"",
                'font-family':"sans-serif"
            }
        }
    },
    created(){
        this.cmpType=this.keep.type
        this.isPinned=this.keep.isPinned || false
        this.style=this.keep.style || {backgroundColor:"",fontFamily:""}
    },
    methods:{
        removeKeep(){
            this.$emit('remove',this.keep.id);
        },
        setPinned(){
            this.keep.isPinned=!this.keep.isPinned
            this.$emit('pin',this.keep.id);
        }
        },
        components:{
            noteTxt,
            noteImg,
            noteTodos,
            noteVid
        },
        computed:{
            pinned(){
                if(this.keep.isPinned===true){
                    return 'ylw'
                }
            }
        }
}