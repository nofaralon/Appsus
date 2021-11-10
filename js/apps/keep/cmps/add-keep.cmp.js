import { keepService } from "../service/keep-service.js"
import { utilService } from "../../../service/util-service.js"
export default {
template:`
<div class="add-keep-container">
                            <div class="add-keep">
                                <form @submit.prevent="addKeep" @click="on">
                                    <input type="text" placeholder="Add a note" v-model="keep.info.txt">
                                </form>
                            </div>

    <!-- <form v-if="isOn" @submit.prevent="addKeep">    
    <input v-if="isImg" type="text" placeholder="title" v-model="keep.title">
    <input v-if="isImg" type="text" placeholder="image url" v-model="keep.info">

    <input v-if="isVideo" type="text" placeholder="title" v-model="keep.info.title">
    <input v-if="isVideo" type="text" placeholder="video url" v-model="keep.info.url">

    <input v-if="isTodos" type="text" placeholder="label" v-model="keep.label">
    <textArea v-if="isTodos" type="text" placeholder="todos" v-model="keep.title"
    rows="6" cols="33">

    </form> -->

</div>

`,
data(){
    return{

        isOn:false,
        isText:true,
        isTodos:false,
        isVideo:false,
        isImg:false,
        keep:{
            info:{}
        }
    }
},
methods:{
addKeep(){
    this.keep.id=utilService.makeId()
    this.keep.type="note-txt"
    console.log(this.keep)
    keepService.addKeep(this.keep)
    // const msg = {
    //     txt: 'keep added.',
    //     type: 'success',
    // };
    // eventBus.$emit('showMsg', msg)
    this.$emit('added')

},
on(){
    this.isOn=!this.isOn
}
},
components:{
    keepService,
    utilService,
}

}