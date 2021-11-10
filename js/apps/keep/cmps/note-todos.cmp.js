import todoItem from "./todo-item.cmp.js"
export default{
    props:['keep'],
    template:`
   <div>
       <label @click="editTxt">
           {{label}}
        </label>
        <form @submit.prevent="editTxt">
                        <input v-show="isEdit" v-model="label">
                    </form>
           <ul>
                <li v-for="todo in todos" class="note">
                    <p @click="editTxt">{{todo.txt}} </p>
                    <form @submit.prevent="editTxt">
                        <input v-show="isEdit" v-model="todo.txt">
                    </form>
                    <!-- <todo-item :txt="todo.txt"/> -->
                </li>
           </ul>

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
components:{
    todoItem,
}
}