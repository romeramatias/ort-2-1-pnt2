<template>
   <section class="src-components-padre">
      <div class="jumbotron" :style="{'background-color': color}">
         <h2>{{texto}} Componente {{pasarMayuscula('Padre')}}</h2>
         <hr />
         <button class="btn btn-success my-3" @click="incrementar()">
            Contador {{ cont }}
         </button>
         <h5 class="alert alert-warning">
            Contador del hijo (evento) {{ contHijo }}
         </h5>

         <!-- Envio prop :contador con bindeo al componente Hijo (prop :contador), le envio la data de cont -->
         <!-- El hijo en props la declara y puede mostrar esos datos -->
         <!-- @contador-hijo es el evento del componente hijo, lo recibe cuando se instancia -->
         <!-- Con el metodo mostrarContadorHijo capto los datos del evento en el padre -->
         <Hijo :contador="cont" @contadorhijo="mostrarContadorHijo($event)" />
      </div>
   </section>
</template>

<script>
/* Para mostrar al hijo tengo que importarlo */
import Hijo from "./Hijo";

/* Filter */
import filters from '../filters.js'

/* Mixin */
/* Es como un fragmento de codigo, se va a mezclar con el codigo de la app, son como una libreria */
/* Los metodos, si no existe pasa a formar parte del componente, si existe el que se ejecuta es el de componente */
/* Los hooks se mezclan con la app */

/* Mixin Externo */
import myMixinExterno from '../myMixin.js'

/* Mixin Local */
var miMixinLocal = {
   /* Hook */
   created: function () {
      this.saludo();
   },
   methods: {
      saludo: function () {
         console.log("Hola desde Mixin Created");
      },
   },
};

export default {
   name: "src-components-padre",
   // Importo el mixin, una vez que lo importo ya lo llama
   mixins: [miMixinLocal, myMixinExterno, filters],
   components: { Hijo },
   props: ['contInicial', 'color', 'texto'],
   mounted() {},
   data() {
      return {
         cont: parseInt(this.contInicial),
         contHijo: 0,
      };
   },
   methods: {
      incrementar() {
         this.cont++;
      },
      mostrarContadorHijo(objeto) {
         // Recibo los datos del evento
         this.contHijo = objeto.valor;
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: rgb(107, 55, 92);
   color: white;
}
</style>
