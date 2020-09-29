Vue.component("Contador", {
   data() {
      return {};
   },
   props: ["id", "color", "contadores"],
   methods: {
      contar() {
         this.contadores[this.id]++;
      },
      getColor() {
         return "btn-" + this.color;
      },
   },
   template: `
   <div style="border: 2px solid grey; padding: 5px; margin-bottom: 10px; border-radius: 7px;">
      <button :class="['btn', getColor()]" @click="contar()">Contar {{id}}= {{contadores[id]}}</button>
      <b>{{contadores}}</b>
   </div>`,
});

let app = new Vue({
   el: "#app",

   data: {
      // Para pasarle al html
      contadores: { 0: 10, 1: 20, 2: 30 },
   },
   methods: {},
   computed: {},
});
