export default {
    props: ['keep'],
    template:`
    <section>
        <component is:></component>
    </section>
    `,
    data(){
        return{
            cmpType:null,
            isPinned: false,
            info:[],
            style:{},
            style:null

        }
    },
    created(){
        this.cmpType=this.keep.type.split("-")[1]
        this.isPinned=this.keep.isPinned || false
        this.style=this.keep.style || null
        this.setType()
        
    },
    methods:{
        setType(){
            if(this.cmpType==='txt'){
                this.info=this.keep.info.txt
                console.log(this.info);
            }else if(this.cmpType==='img'){
                this.info={
                    title:this.keep.info.title,
                    url: this.keep.info.url
                }
            }else{

            }
                console.log(this.info);
            }
        }


    },
}