export default{
    props:['txt'],
    // name:'todo-item',
    template:`
    <div>
        <p >{{txt}} </p>
                       <!-- <form @submit.prevent="editTxt"> -->
                           <!-- <input v-show="isEdit" v-model="todo.txt"> -->
                       <!-- </form> -->
    </div>
    
    `,
}