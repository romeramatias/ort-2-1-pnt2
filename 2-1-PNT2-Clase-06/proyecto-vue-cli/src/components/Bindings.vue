/* Le sacamos un par de cosas que no sirven (lang, css) */
/* Despues habria que importar el componente a 'App.vue' */
<template>
   <section class="src-components-bindings">
      <div class="jumbotron">
         <h2>Directivas Data Binding</h2>
         <p>{{ 5 + 5 }}</p>
         <div>{{ mensaje }}</div>
         <div v-text="mensaje"></div>
         <div v-html="mensaje"></div>
         <hr />

         <div>{{ mensajeHTML }}</div>
         <div v-text="mensajeHTML"></div>
         <div v-html="mensajeHTML"></div>
         <hr />

         <h4>
            <u>Property Bind / v-bind</u>
         </h4>
         <input type="text" value="123" />
         <br />
         <input type="text" value="valor" />
         <br />
         <input type="text" v-bind:value="valor" />
         {{ valor }}
         <br />
         <input type="text" :value="valor" />
         {{ valor }}
         <br />

         <hr />

         <h4>
            <u>Event Bind / v-on</u>
         </h4>
         <div class="btn btn-warning my-3 mr-3" v-on:click="contador++">
            Contar {{ contador }}
         </div>
         <div class="btn btn-danger my-3 mr-3" @click="contador2++">
            Contar {{ contador2 }}
         </div>
         <div class="btn btn-success my-3 mr-3" @click="incrementar()">
            Contar {{ getContador3() }}
         </div>
         <hr />

         <h4>
            <u>Doble Data Binding / v-model</u>
         </h4>
         <h5>Manual</h5>
         <input type="text" :value="valor2" @input="actualizar($event)" />
         {{ valor2 }}
         <br />
         <h5>Automatico</h5>
         <input type="text" v-model="valor3" />
         {{ valor3 }}
         <br />
         <hr />

         <h4>
            <u>Componentes</u>
         </h4>
         <Contador init="21" color="danger" />
         <Contador init="444" color="info" />
         <Contador init="555" color="success" />
         <br />
         <hr />

         <h4>
            <u>Rutas Push</u>
         </h4>

         <button class="btn btn-success my-3 mr-2" @click="goHttp()">
            Ir a HTTP
         </button>
         <button class="btn btn-info my-3 mr-2" @click="goPadre()">
            Ir a Padre
         </button>
      </div>
   </section>
</template>

<script>
import Contador from "./contador";

export default {
   name: "src-components-bindings", // Este nombre puede o no coincidir con el nombre del archivo
   props: [],
   components: {
      Contador,
   },
   mounted() {},
   data() {
      return {
         mensaje: "Soy un mensaje",
         mensajeHTML: "<i>Soy un mensaje</i>",
         contador: 123,
         contador2: 456,
         contador3: 789,
      };
   },
   methods: {
      incrementar() {
         this.contador3++;
      },
      getContador3() {
         return this.contador3;
      },
      actualizar(e) {
         let dato = e.target.value;
         console.log(dato);
         this.valor2 = dato;
      },
      /* Ruteo con Push */
      goHttp() {
         this.$router.push("/http");
      },
      goPadre() {
         //this.$router.push("/padre/77/violet/MensajeDesdeBinding");
         /* Ruteo enviando un objeto */
         this.$router.push({
           name: 'Padre', params: {
             contInicial: 69,
             color: 'blue',
             texto: 'Mensaje desde objeto push'
           }
         })
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: slategrey;
   color: white;
}
</style>
