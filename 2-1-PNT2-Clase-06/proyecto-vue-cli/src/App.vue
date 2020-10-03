<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Vue.js CLI</h1>
      <img alt="Vue logo" src="./assets/logo.png" />
      <br />
      <Navbar />

      <Bindings />
      <Estructura />
      <Atributos />

      <Contador init="21" color="danger" />
      <Contador init="444" color="info" />
      <Contador init="555" color="success" />
    </div>
  </div>
</template>

<script>
import Bindings from "./components/Bindings.vue";
import Contador from "./components/contador/index.vue";
import Estructura from "./components/Estructura.vue";
import Atributos from "./components/Atributos.vue";
import Navbar from "./components/navbar/index.vue";


export default {
  name: "App",
  components: {
    Bindings,
    Contador,
    Estructura,
    Atributos,
    Navbar,
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
