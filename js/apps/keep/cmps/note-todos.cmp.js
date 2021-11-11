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
                <li v-for="todo in todos" class="todos" :key="todo.id">
                  <input type="checkbox" @change="completedTask(todo)" :checked="todo.doneAt"> 
                    <span :class="{done : todo.doneAt}" @click="editTxt">{{todo.txt}} </span>
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
    },
    completedTask: function(todo){
        todo.doneAt=!todo.doneAt
    }
    
},
computed:{
    doneAt(todo){
        console.log(todo);
        
    }
},
components:{
    todoItem,
}
}