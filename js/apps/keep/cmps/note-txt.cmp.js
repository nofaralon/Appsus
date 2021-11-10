export default{
    props:['keep'],
    template:`
   <div class="note-txt">
    <p @click="editTxt">{{info}}</p>
        <form @submit.prevent="editTxt">
            <input v-show="isEdit" v-model="info">
        </form>
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
    this.info=this.keep.info.txt
   },
   methods:{
    editTxt(){
        this.isEdit=!this.isEdit;
    }
   }
}