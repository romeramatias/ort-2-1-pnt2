<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron mt-3">
      <img alt="Vue logo" src="./assets/logo.png" />
      <br />

      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";

export default {
  name: "App",
  components: {
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
