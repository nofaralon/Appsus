import keepPreview from "./keep-preview.cmp.js"
export default {
    props:['keeps'],
    template:`
    <section class="keep-list">                           
    <div class="keeps">
        <ul>
            <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container">
                <keep-preview :keep="keep" @remove="removeKeep" @pin="pinKeep" @unpin="removePin" @duplicate="duplicatePin"/>
            </li>
        </ul>
    </div>

    </section>
    `,
    methods:{
        addKeep(keep){
            console.log(keep);
            this.$emit('added',keep)
        },
        removeKeep(id){
            this.$emit('remove',id)
        },
        pinKeep(id){
            this.$emit('pin',id)
        },
        removePin(id){
            this.$emit('unpin',id)
        },
        duplicatePin(id){
            this.$emit('duplicate',id)
        }

    },

    components:{
        keepPreview,
    }
}