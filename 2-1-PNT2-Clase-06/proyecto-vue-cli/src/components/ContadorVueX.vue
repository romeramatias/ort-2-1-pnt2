<template>
   <section class="src-components-contador-vue-x">
      <div class="jumbotron">
         <h2>Contador VueX</h2>
         <hr />

         <h3>Contador: {{ mostrarContador }}</h3>
         <button class="btn btn-info m-2" @click="decrementar()">Decrementar</button>
         <button class="btn btn-info m-2" @click="incrementar()">Incrementar</button>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-contador-vue-x",
   props: ['onContador'],
   mounted() {},
   data() {
      return {
         contador: 21,
      };
   },
   methods: {
      decrementar() {
         this.$store.dispatch('contarDown', 1);
      },
      incrementar() {
         this.$store.dispatch('contarUp', 1);
      },
      decrementar2() {
         this.contador--;
      },
      incrementar2() {
         this.contador++;
      },
   },
   computed: {
      mostrarContador(){
         return this.$store.state.contador;
      },
      mostrarContador2() {
         // Creacion del evento
         this.$emit("contador", this.contador);
         return this.contador;
      },
   },
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: darkcyan;
   color: white;
}
</style>
