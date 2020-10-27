<template lang="html">
   <section class="src-components-usuarios">
      <div v-if="this.usuarios.length < 0" class="alert alert-warning">
         <p>No hay usuarios</p>
      </div>
      <div v-else>
         <div class="media alert alert-info mt-4" v-for="(usuario, index) in usuarios" :key="index">
            <div class="media-body ml-3">
               <h4>ID: {{ usuario.id }}</h4>
               <p>
                  Nombre:
                  <b>{{ usuario.nombre }}</b>
               </p>
               <p>
                  Edad: <b>{{ usuario.edad }}</b>
               </p>
               <p>Email: <b>{{ usuario.email}}</b></p>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-usuarios",
   props: [],
   mounted() {
      this.getUsuarios();
      console.log("usuarios", this.usuarios);
   },
   data() {
      return {
         usuarios: [],
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/usuarios/",
      };
   },
   methods: {
      async getUsuarios() {
         try {
            let res = await this.axios(this.url);
            console.log("resdata", res.data);
            this.usuarios = res.data;
         } catch (error) {
            console.log("ERROR GET HTTP", error);
         }
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.src-components-usuarios {
}
</style>
