export default{
    props:['keep'],
    template:`
   <div>
       <label>
           {{label}}
           <ul>
                <li v-for="todo in todos">
                    <p @click="editTxt">{{todo.txt}} </p>
                    <form @submit.prevent="editTxt">
                        <input v-show="isEdit" v-model="todo.txt">
                    </form>
                </li>
           </ul>
       </label>

   </div>
   `,
    data(){
        return{
            label:null,
            todos:null,
            style:null,
            isEdit:false,
        }
    },
   created(){
    this.style=this.keep.style || null        
    this.label=this.keep.info.label || null        
    this.todos=this.keep.info.todos || null           
   },
   methods:{
    editTxt(){
        this.isEdit=!this.isEdit;
    }
},

}