<template>
   <section class="src-components-formulario-vue">
      <div class="jumbotron">
         <h2>Formulario Vuelidate</h2>
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
                     El nombre debe tener al menos
                     {{ $v.formu.nombre.minLength.$params.length }} caracteres
                  </div>
                  <div v-else-if="$v.formu.nombre.maxLength.$invalid">
                     El nombre debe tener como maximo
                     {{ $v.formu.nombre.maxLength.$params.max }} caracteres
                  </div>
                  <div v-else-if="$v.formu.nombre.conEspacios.$invalid">
                     No se permiten espacios en este campo
                  </div>
               </div>
            </div>
            <div class="form-group">
               <label for="edad">Edad</label>
               <input
                  type="number"
                  id="edad"
                  class="form-control"
                  v-model.number="$v.formu.edad.$model"
               />
               <div
                  v-if="$v.formu.edad.$error && $v.formu.edad.$dirty"
                  class="alert alert-warning mt-1"
               >
                  <div v-if="$v.formu.edad.required.$invalid">
                     Campo requerido
                  </div>
                  <div v-else-if="$v.formu.edad.between.$invalid">
                     La edad debe ser mayor a 18 y menor a 90 |
                     {{ $v.formu.edad.between.$message }}
                  </div>
               </div>
            </div>
            <div class="form-group">
               <label for="email">Email</label>
               <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model.number="$v.formu.email.$model"
               />
               <div
                  v-if="$v.formu.email.$error && $v.formu.email.$dirty"
                  class="alert alert-warning mt-1"
               >
                  <div v-if="$v.formu.email.required.$invalid">
                     Campo requerido
                  </div>
                  <div v-else-if="$v.formu.email.$invalid">
                     Debe proveer un email valido
                  </div>
               </div>
            </div>
            <div class="form-group">
               <input
                  type="submit"
                  :disabled="$v.$invalid"
                  class="btn btn-success"
                  value="Enviar"
               />
            </div>
         </form>

         <!--           <pre>{{ $v }}</pre> 
 -->
      </div>
   </section>
</template>

<script>
// Hay que importar los required

function validarEspacios(value) {
   return !value.includes(" ");
}

import {
   required,
   minLength,
   between,
   email,
   maxLength,
} from "@vuelidate/validators";

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
         nombre: {
            required,
            conEspacios: validarEspacios,
            minLength: minLength(4),
            maxLength: maxLength(15),
         },
         edad: { required, between: between(18, 80) },
         email: { required, email },
      },
   },
   computed: {},
   mounted() {
      //this.getDatosFormFetch();
      this.getDatosFormAxios();
   },
   methods: {
      delay: (ms) => new Promise((res) => setTimeout(res, ms)),

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
      async sendDatosFormAxios(datos) {
         try {
            let res = await this.axios.post(this.url, datos, {
               "content-type": "application/json",
            });
            //await this.delay(500)
            console.log(res.data);
         } catch (error) {
            console.log("ERROR POST HTTP", error);
         }
      },
      async getDatosFormAxios() {
         try {
            let res = await this.axios(this.url);
            console.log(res.data);
         } catch (error) {
            console.log("ERROR GET HTTP", error);
         }
      },
      async enviar() {
         this.$v.$touch();
         if (!this.$v.$invalid) {
            let form = this.formu;
            console.log(this.formu);
            await this.sendDatosFormAxios(form);
            this.formu = this.resetForm();
            this.$v.$reset();
         }
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
