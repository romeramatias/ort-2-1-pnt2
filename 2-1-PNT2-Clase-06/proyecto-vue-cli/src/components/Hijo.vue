<template>
   <section class="src-components-hijo">
      <div class="jumbotron">
         <h2>{{wrap('Componente', 'INICIO ', ' FINAL')}} {{reversa(pasarMayuscula('Hijo'))}}</h2>
         <hr />
         <button class="btn btn-warning my-3" @click="incrementar()">
            Contador {{ cont }}
         </button>
         <h5 class="alert alert-warning">
            Contador del padre (prop) {{ contador }}
         </h5>
      </div>
   </section>
</template>

/* El hijo no puede enviarle al padre por prop */
/* La manera de hacer esto es con un evento propio. ver incrementar() */

<script>
import filters from '../filters.js'

export default {
   mixins: [filters],
   name: "src-components-hijo",
   /* Recibe la prop contador */
   /* onContadorhijo formaliza la salida */
   // Forma 1:
   //props: ["contador", "onContadorhijo"],

   // Forma 2: Como objeto
   //props: { contador: Number, onContadorhijo: Function },

   // Forma 3: Como objetos con propiedades
   props: {
      contador: {
         type: Number,
         required: true,
      },
      onContadorhijo: { type: Function, required: true },
   },

   mounted() {},
   data() {
      return {
         cont: 0,
      };
   },
   methods: {
      // Metodo para el cont propio
      incrementar() {
         this.cont++;
         // Crea un evento, le ponemos nombre al evento y los datos
         // envia los datos del segundo parametro
         let objeto = {valor: this.cont}
         this.$emit("contadorhijo", objeto);
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: rgb(228, 97, 191);
   color: white;
}
</style>
