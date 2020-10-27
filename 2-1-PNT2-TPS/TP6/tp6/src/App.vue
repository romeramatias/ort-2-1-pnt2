<template>
   <div class="jumbotron">
      <div id="app" class="container-fluid mt-3">
         <Navbar />
         <router-view />
      </div>
   </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
   name: "App",
   components: {
      Navbar,
   },
};
</script>

<style>
</style>
