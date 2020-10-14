Vue.component("encabezado", {
   data() {},
   props: [],
   methods: {},
   template: `
   <div id="header">
     <h1>
      PNT2 - TP4 <br />
      Juego Colores <br />
      <span id="colorDisplay">Aca iria el color</span>
      <br />
     </h1>
    </div>
   `,
});

Vue.component("juego2", {
   data() {},
   props: [],
   methods: {},
   template: {},
});

const app = new Vue({
   el: "app",
   data: {
      cantCuadrados: 3,
   },
   methods: {},
});
