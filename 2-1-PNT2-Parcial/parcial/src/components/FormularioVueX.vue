<template>
   <section class="src-components-formulario-vue">
      <h2>Formulario de Gastos</h2>
      <hr />

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
         <div class="form-group">
            <label for="nombre">¿Quien realizó el gasto?</label>
            <input
               type="text"
               id="nombre"
               class="form-control"
               v-model="v.formu.nombre.$model"
            />
            <div
               v-if="v.formu.nombre.$error && v.formu.nombre.$dirty"
               class="alert alert-warning mt-1"
            >
               <div v-if="v.formu.nombre.required.$invalid">
                  Campo requerido!
               </div>
               <div v-else-if="v.formu.nombre.minLength.$invalid">
                  El nombre debe tener al menos
                  {{ v.formu.nombre.minLength.$params.min }} caracteres
               </div>
               <div v-else-if="v.formu.nombre.maxLength.$invalid">
                  El nombre debe tener como maximo
                  {{ v.formu.nombre.maxLength.$params.max }} caracteres
               </div>
               <div v-else-if="v.formu.nombre.conEspacios.$invalid">
                  No se permiten espacios en este campo :(
               </div>
            </div>
         </div>

         <div class="form-group">
            <label for="descripcion">Descripción del gasto</label>
            <input
               id="descripcion"
               class="form-control"
               v-model.number="v.formu.descripcion.$model"
            />
            <div
               v-if="v.formu.descripcion.$error && v.formu.descripcion.$dirty"
               class="alert alert-warning mt-1"
            >
               <div v-if="v.formu.descripcion.required.$invalid">
                  Campo requerido!
               </div>
            </div>
         </div>
         <div class="form-group">
            <label for="importe">Importe del gasto</label>
            <input
               type="number"
               id="importe"
               class="form-control"
               v-model.number="v.formu.importe.$model"
            />
            <div
               v-if="v.formu.importe.$error && v.formu.importe.$dirty"
               class="alert alert-warning mt-1"
            >
               <div v-if="v.formu.importe.required.$invalid">
                  Campo requerido
               </div>
            </div>
         </div>
         <div class="form-group">
            <input
               type="submit"
               :disabled="v.$invalid"
               class="btn btn-success"
               value="Enviar"
            />
         </div>
      </form>
   </section>
</template>

<script>
function validarEspacios(value) {
   return !value.includes(" ");
}

import { required, minLength, maxLength } from "@vuelidate/validators";
import useVuelidate from '@vuelidate/core';

export default {
   name: "formulario",
   components: {},
   props: [],
   mounted() {
      this.getDatosFormAxios();
   },
   created() {
      const rules = {
         formu: {
            nombre: {
               required,
               conEspacios: validarEspacios,
               minLength: minLength(5),
               maxLength: maxLength(15),
            },
            importe: { required },
            descripcion: { required },
         },
      },
      const formulario = this.formu,
      this.v = useVuelidate(rules, {formulario})
   },
   data() {
      return {
         formu: {
            nombre: "",
            descripcion: "",
            importe: "",
         },
         v: null,
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/gastos",
      };
   },
   computed: {},
   methods: {
      async sendDatosFormAxios(datos) {
         try {
            let res = await this.axios.post(this.url, datos, {
               "content-type": "application/json",
            });
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
         this.v.$touch();
         if (!this.v.$invalid) {
            let form = this.formu;
            await this.sendDatosFormAxios(form);
            this.resetForm();
            this.v.$reset();
         }
      },
      resetForm() {
            this.v.formulario.nombre.$model = ''
            this.v.formulario.descripcion.$model = ""
            this.v.formulario.importe.$model = ""
      },
   },
};
</script>

<style scoped lang="css"></style>
