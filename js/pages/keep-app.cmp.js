import { keepService } from "../apps/keep/service/keep-service.js";
import keepList from "../apps/keep/cmps/keep-list.cmp.js";
import addKeep from "../apps/keep/cmps/add-keep.cmp.js";
import keepFilter from "../cmps/keep-filter.cmp.js";

export default {
  template: `
    <div>
        <keep-filter @filtered="setFilter"/>
        <add-keep @added="loadKeeps"/>
        <keep-list :keeps="keepsToShow" @removed="loadKeeps" />
    </div>
    `,
  data() {
    return {
      keeps: null,
      filterBy: null,
      selectedKeep: null,
    };
  },
  created() {
    this.loadKeeps();
  },
  methods: {
    loadKeeps() {
      keepService.query().then((keeps) => {
        this.keeps = keeps;
        console.log(this.keeps);
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    keepsToShow() {
      if (!this.filterBy) return this.keeps;
      const tagStr = this.filterBy.name.toLowerCase();
      var txtStr = this.filterBy.txt.toLowerCase();
      return this.keeps.filter((keep) => {
        if (txtStr.length && keep.info.title) {
          if (!tagStr.length) {
            return keep.info.title.toLowerCase().includes(txtStr);
          } else {
            return (
              keep.type.toLowerCase().includes(tagStr) &&
              keep.info.title.toLowerCase().includes(txtStr)
            );
          }
        } else if (txtStr.length && keep.info.todos) {

          if (!tagStr.length) {
              const todos = keep.info.todos.filter(todo => {
            return todo.txt.toLowerCase().includes(txtStr);
        });
        if(todos.length){
            return keep
        }else{
            return keep.info.label.toLowerCase().includes(txtStr);
        }
          } else {
            const todos = keep.info.todos.filter(todo => {
              return todo.txt.toLowerCase().includes(txtStr);
            });
            if(todos.length){
                return keep
            }else{
                return (keep.type.toLowerCase().includes(tagStr) && keep.info.label.toLowerCase().includes(txtStr));
            }
          }
        } else if (txtStr.length && keep.info.txt) {

          if (!tagStr.length) {
            return keep.info.txt.toLowerCase().includes(txtStr);
          } else {
            return (
              keep.type.toLowerCase().includes(tagStr) &&
              keep.info.txt.toLowerCase().includes(txtStr)
            );
          }
        }
        if (!txtStr.length) return keep.type.toLowerCase().includes(tagStr);
      });
    },
  },
  components: {
    keepService,
    keepList,
    addKeep,
    keepFilter,
  },
};
