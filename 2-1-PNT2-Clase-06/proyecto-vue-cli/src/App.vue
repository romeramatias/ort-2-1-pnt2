<template>
   <div id="app" class="container-fluid mt-3">
      <div class="jumbotron mt-3">
         <br />
         <h1>Vue Cli {{ $store.state.contador }}</h1>

         <!-- Recupera el contador del componente hijo -->
         <!-- <ContadorVueX @contador="setContador($event)" /> -->

         <!-- Se lo envio a la barra de navegacion -->
         <!-- <Navbar :contador="getContador()" /> -->
         
         <ContadorVueX />
         <Navbar />
         <router-view />
      </div>
   </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";
import ContadorVueX from "./components/ContadorVueX.vue";

export default {
   name: "App",
   components: {
      Navbar,
      ContadorVueX,
   },
   data() {
      return {
         contador: 0,
      };
   },
   methods: {
      // Con Vuex todas estas boludeces no hacen falta
      setContador(valor) {
         console.log(valor);
         this.contador = valor;
      },
      getContador() {
         return this.contador;
      },
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   margin-top: 60px;
}

h1 {
   color: teal;
}
</style>
