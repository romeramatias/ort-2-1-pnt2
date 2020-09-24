Vue.component("Contador", {
   data() {
      return {
         cont: Number(this.init) || 0,
      };
   },
   props: ["init", "color"],
   methods: {
      contar() {
         this.cont++;
      },
      getColor() {
         return "btn-" + this.color;
      },
   },
   template: `<button :class="['btn', getColor()]" @click="contar()">Contar {{cont}}</button>`,
});

let app = new Vue({
   el: "#app",

   data: {
      contadores: {0: 10, 1:20, 2: 30}
   },
   methods: {},
   computed: {},
});
