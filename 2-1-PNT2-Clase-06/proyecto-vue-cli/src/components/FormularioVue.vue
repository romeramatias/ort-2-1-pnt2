<template>
   <section class="src-components-formulario-vue">
      <div class="jumbotron">
         <h2>Formulario Vue</h2>
         <hr />

         <form novalidate autocomplete="off" @submit.prevent="enviar()">
            <div class="form-group">
               <label for="nombre">Nombre</label>
               <input
                  type="text"
                  id="nombre"
                  class="form-control"
                  v-model="$v.formu.nombre.$model"
               />
               <div
                  v-if="$v.formu.nombre.$error && $v.formu.nombre.$dirty"
                  class="alert alert-warning mt-1"
               >
                  <div v-if="$v.formu.nombre.required.$invalid">
                     Campo requerido
                  </div>
                  <div v-else-if="$v.formu.nombre.minLength.$invalid">
                     El nombre debe tener al menos 4 caracteres
                  </div>
               </div>
            </div>
            <div class="form-group">
               <label for="edad">Edad</label>
               <input
                  type="number"
                  id="edad"
                  class="form-control"
                  v-model="$v.formu.edad.$model"
               />
               <div
                  v-if="$v.formu.edad.$error && $v.formu.edad.$dirty"
                  class="alert alert-warning mt-1"
               >
                  <div v-if="$v.formu.edad.required.$invalid">
                     Campo requerido
                  </div>
                  <div v-else-if="$v.formu.edad.between.$invalid">
                     La edad debe ser mayor a 18 y menor a 90
                  </div>
               </div>
            </div>
            <div class="form-group">
               <input
                  type="submit"
                  :disabled="false"
                  class="btn btn-success"
                  value="Enviar"
               />
            </div>
         </form>

         <!-- <pre>{{ $v }}</pre> -->
      </div>
   </section>
</template>

<script>
// Hay que importar los required
import { required, minLength, between } from "@vuelidate/validators";

export default {
   name: "formulario",
   components: {},
   props: [],
   data() {
      return {
         formu: this.resetForm(),
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/datosForm",
      };
   },
   validations: {
      formu: {
         nombre: { required, minLength: minLength(4) },
         edad: { required, between: between(18, 80) },
      },
   },
   computed: {},
   mounted() {
      //this.getDatosFormFetch();
      this.getDatosFormAxios();
   },
   methods: {
      // ------------------------------------------------------------------------
      // Fetch con async await
      // ------------------------------------------------------------------------
      async sendDatosFormFetch(datos) {
         try {
            let response = await fetch(this.url, {
               method: "post",
               body: JSON.stringify(datos),
               headers: { "content-type": "application/json" },
            });
            let json = await response.json();
            console.log(json);
         } catch (error) {
            console.log(error);
         }
      },
      async getDatosFormFetch() {
         try {
            let response = await fetch(this.url);
            let json = await response.json();
            console.log(json);
         } catch (error) {
            console.log(error);
         }
      },
      // ------------------------------------------------------------------------
      // Axios con promesas, then catch
      // ------------------------------------------------------------------------
      sendDatosFormAxios(datos) {
         this.axios.post(this.url, datos, { "content-type": "application/json" })
            .then((response) => console.log(response.data))
            .catch((error) => console.log("ERROR POST HTTP", error));
      },
      getDatosFormAxios() {
         this.axios(this.url)
            .then((res) => console.log(res.data))
            .catch((error) => console.log("ERROR GET HTTP", error));
      },
      enviar() {
         let form = {
            nombre: this.$v.formu.nombre.$model,
            edad: this.$v.formu.edad.$model,
         };
         console.log(this.formu);
         //this.sendDatosFormFetch(form);
         this.sendDatosFormAxios(form);
         this.formu = this.resetForm();
         this.$v.$reset();
      },

      // Valor inicial de los datos en formulario vue
      resetForm() {
         return {
            nombre: "",
            edad: "",
         };
      },
   },
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: rgb(24, 3, 44);
   color: white;
}
pre {
   color: white;
}
</style>
