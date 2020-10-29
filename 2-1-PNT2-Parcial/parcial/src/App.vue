<template>
   <div id="app" class="container-fluid mt-3">
      <NavBar />
      <div class="jumbotron">
         <router-view />
      </div>
   </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
   name: "App",
   components: {
      NavBar,
   },
};
</script>

<style>

</style>
