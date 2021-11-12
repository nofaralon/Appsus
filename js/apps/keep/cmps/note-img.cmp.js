export default{
    props:['keep'],
    template:`
   <div class="note note-img" :style="style">
    <h3 @click="editTxt">{{info.title}}</h3>
       <div v-show="isEdit" class="text-editor">
            <form @submit.prevent="editTxt">
                <input v-model="info.title">
            </form>
       </div>
    
       <img :src="info.url">
    </div>
   `,
     data(){
        return{
            info:null,
            style:null,
            isEdit:false,
        }
    },
    created(){
        this.style=this.keep.style     
        this.info={
            title:this.keep.info.title,
            url: this.keep.info.url
        }
    },
    methods:{
        editTxt(){
            this.isEdit=!this.isEdit;
        }
    },
}