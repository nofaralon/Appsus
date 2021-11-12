import todoItem from "./todo-item.cmp.js"
export default{
    props:['keep'],
    template:`
   <div class="todos-lists">
       <label class="todos-label" @click="editTxt">
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
                        <input  v-show="isEdit" v-model="todo.txt">
                    </form>
                    <!-- <todo-item :txt="todo.txt"/> -->
                </li>
                <input class="added-todo-input" @change="addTodo" type="text" v-model="todo.txt" placeholder="Forgot something?">
            </ul>
   </div>
   `,
    data(){
        return{
            label:null,
            todos:null,
            todo:{
                txt:'',
                doneAt:null
            },
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
        console.log(todo.doneAt);
        todo.doneAt=!todo.doneAt
    },
    addTodo(){
        console.log(this.todo);
        this.keep.info.todos.push(JSON.parse(JSON.stringify(this.todo)))
        this.todo={
            txt:'',
            doneAt:null
        }
    }
    
},
components:{
    todoItem,
}
}