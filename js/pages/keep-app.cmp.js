import { keepService } from "../apps/keep/service/keep-service.js"
import keepList from "../apps/keep/cmps/keep-list.cmp.js"
import addKeep from "../apps/keep/cmps/add-keep.cmp.js"



export default {
    template:`
    <div>
        <add-keep @added="loadKeeps"/>
        <keep-list :keeps="keepsToShow" @removed="loadKeeps"/>
    </div>
    `,
    data(){
        return {
            keeps: null,
            filterBy: null,
            selectedKeep:null,
        }
    },
    created(){
        this.loadKeeps()
    },
    methods:{
        loadKeeps(){
            keepService.query().then((keeps)=>{
                this.keeps=keeps;
                console.log(this.keeps)
            })
        }
    },
    computed:{
        keepsToShow(){
            if(!this.filterBy) return this.keeps
        }
    },
    components:{
        keepService,
        keepList,
        addKeep,
    
    }
}