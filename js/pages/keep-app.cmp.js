import { keepService } from "../apps/keep/service/keep-service.js"
import keepList from "../apps/keep/cmps/keep-list.cmp.js"



export default {
    template:`
    <keep-list :keeps="keepsToShow"/>
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
    
    }
}