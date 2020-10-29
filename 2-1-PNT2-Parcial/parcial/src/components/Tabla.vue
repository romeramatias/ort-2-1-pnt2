<template>
   <section class="src-components-tabla">
      <h2>Tabla de Gastos</h2>
      <hr />

      <div class="media alert alert-dark">
         Presupuesto:<input class="ml-3" type="numer" :value="presupuesto" @input="actualizar($event)" />
      </div>

      <table class="table table-dark">
         <thead>
            <tr>
               <th scope="col">Nombre</th>
               <th scope="col">Descripción</th>
               <th scope="col">Importe</th>
               <th scope="col">Fecha</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(gasto, index) in gastos" :key="index">
               <td>{{ gasto.nombre }}</td>
               <td>{{ gasto.descripcion }}</td>
               <td>{{ valorConSigno(gasto.importe) }}</td>
               <th>{{ formatoFecha(gasto.createdAt) }}</th>
            </tr>
         </tbody>
         <tbody>
            <tr>
               <td>Gasto Total:</td>
               <td></td>
               <td>
                  <b>
                     <div v-if="this.importeTotal > presupuesto" style="color: red">
                        {{ valorConSigno(importeTotal) }}
                     </div>
                     <div v-else-if="this.importeTotal < 1000" style="color: green">
                        {{ valorConSigno(importeTotal) }}
                     </div>
                     <div v-else-if="this.importeTotal > 1000 && this.importeTotal < 5000" style="color: purple">
                        {{ valorConSigno(importeTotal) }}
                     </div>
                     <div v-else-if="this.importeTotal > 5000" style="color: orange">
                        {{ valorConSigno(importeTotal) }}
                     </div>
                  </b>
               </td>
               <td></td>
            </tr>
         </tbody>
      </table>
   </section>
</template>

<script>
import filters from "../filters.js";

export default {
   name: "src-components-tabla",
   props: [],
   mixins: [filters],
   beforeMounted() {
      this.getGastos();
   },
   mounted() {
      this.calcularGastoTotal();
   },
   data() {
      return {
         gastos: [],
         importeTotal: 0,
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/gastos/",
         presupuesto: 0,
      };
   },
   methods: {
      async getGastos() {
         try {
            let res = await this.axios(this.url);
            this.gastos = res.data;
         } catch (error) {
            console.log("ERROR GET HTTP", error);
         }
      },
      async calcularGastoTotal() {
         await this.getGastos();
         var sum = 0;
         for (let i = 0; i < this.gastos.length; i++) {
            const gasto = this.gastos[i];
            sum = sum + gasto.importe;
         }
         this.importeTotal = sum;
      },
      actualizar(e) {
         let dato = e.target.value;
         console.log(dato);
         this.presupuesto = dato;
      },
   },
   computed: {},
};
</script>

<style scoped lang="css"></style>
