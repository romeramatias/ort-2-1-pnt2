<template>
   <section class="src-components-estructura">
      <div class="jumbotron">
         <h2>Directivas Estructurales</h2>
         <h4><u>v-if</u></h4>

         <button class="btn btn-warning my-3" @click="mostrar = !mostrar">
            {{ mostrar ? "Ocultar" : "Mostrar" }}
         </button>
         <p v-if="mostrar" class="alert alert-warning">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            atque tenetur doloribus, soluta voluptatum ex, corrupti culpa
            perspiciatis at neque minus nisi recusandae hic voluptatibus dolor
            fuga, est nobis vitae.
         </p>
         <p v-else class="alert alert-danger">Elemento removido</p>
         <hr />

         <h4><u>v-show</u></h4>
         <button class="btn btn-info my-3" @click="mostrar2 = !mostrar2">
            {{ mostrar2 ? "Ocultar" : "Mostrar" }}
         </button>
         <p v-show="mostrar2" class="alert alert-info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            atque tenetur doloribus, soluta voluptatum ex, corrupti culpa
            perspiciatis at neque minus nisi recusandae hic voluptatibus dolor
            fuga, est nobis vitae.
         </p>
         <hr />

         <h4><u>v-for</u></h4>
         <br />

         <ul>
            <li v-for="p in personas" :key="p">{{ p }}</li>
         </ul>

         <ul>
            <li v-for="(p, i) in personas" :key="i">{{ i + 1 }} {{ p }}</li>
         </ul>
         <hr />
         <!-- Clase 04 | V-For en una tabla, alumnos-->

         <p>Clase 04 | V-For en una tabla, alumnos</p>

         <button class="btn btn-warning my-3" @click="agregarAlumno()">
            Agregar alumno harcodeado
         </button>
         <div v-if="alumnos.length > 0">
            <ul>
               <li v-for="(al, ind) in alumnos" :key="ind">
                  {{ ind + 1 }} {{ al.nombre }} {{ al.apellido }}
               </li>
            </ul>

            <div class="table-responsive">
               <table class="table">
                  <tr class="bg-success text-white">
                     <th>Nombre</th>
                     <th>Apellido</th>
                     <th>Edad</th>
                     <th>Curso</th>
                     <th>Foto</th>
                  </tr>
                  <tr
                     class="bg-info text-white"
                     v-for="(al, ind) in alumnos"
                     :key="ind"
                  >
                     <td>{{ al.nombre }}</td>
                     <td>{{ al.apellido }}</td>
                     <td>{{ al.edad }}</td>
                     <td>{{ al.curso ? "Si" : "No" }}</td>
                     <td>
                        <img :src="al.foto" width="50" :alt="al.nombre" />
                     </td>
                  </tr>
               </table>

               <div class="alert alert-info">
                  <div v-if="alumnosConCurso.ninguno">
                     Ningun alumno realizo el curso
                  </div>
                  <div v-else-if="alumnosConCurso.todos">
                     Todos los alumnos realizaron el curso
                  </div>
                  <div v-else>
                     {{ alumnosConCurso.cantidad }}

                     el curso, en un total de
                     {{ alumnosConCurso.total }} alumnos
                  </div>
               </div>
            </div>

            <br />

            <div
               class="media alert alert-info"
               v-for="(al, ind) in alumnos"
               :key="ind"
            >
               <img :src="al.foto" width="150" :alt="al.nombre" />
               <div class="media-body ml-3">
                  <h5>
                     <u> ID: {{ ind + 1 }}</u>
                  </h5>
                  <p>Nombre: {{ al.nombre }} {{ al.apellido }}</p>
                  <p>
                     Edad: <i>{{ al.edad }}</i>
                  </p>
                  Hizo el curso
                  <input v-model="al.curso" type="checkbox" />
                  <button class="btn btn-danger ml-3" @click="eliminar(ind)">
                     Eliminar Alumno
                  </button>
               </div>
            </div>
         </div>
         <p v-else class="alert alert-danger">No hay alumnos</p>

         <hr />

         <h4><u>v-if | v-else-if | v-else</u></h4>
         <br />
         <input type="text" v-model="nombre" /><br />
         <div class="div btn btn-primary mt-3">
            <div v-if="nombre.toLowerCase() == 'matias'">
               Bienvenido {{ nombre }}
            </div>
            <div v-else-if="nombre.toLowerCase() == 'pepe'">
               Bienvenido {{ nombre }}
            </div>
            <div v-else-if="nombre.toLowerCase() == 'jose'">
               Bienvenido {{ nombre }}
            </div>
            <div v-else-if="nombre.length >= 3">Hola {{ nombre }}</div>
            <div v-else>No hay ningun nombre!</div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-estructura",
   props: [],
   mounted() {
     // this.getAlumnosAxios();
   },
   data() {
      return {
         mostrar: true,
         mostrar2: true,
         personas: ["Matias", "Juan", "Daniel", "Pedro"],
         alumnos: [
            {
               nombre: "Matias",
               apellido: "Romera",
               edad: 24,
               curso: true,
               foto:
                  "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png",
            },
            {
               nombre: "Federico",
               apellido: "Mateucci",
               edad: 20,
               curso: true,
               foto:
                  "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
            },
            {
               nombre: "Florencia",
               apellido: "Garduno",
               edad: 21,
               curso: true,
               foto:
                  "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
            },
            {
               nombre: "Julian",
               apellido: "Grilli",
               edad: 22,
               curso: false,
               foto:
                  "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png",
            }, 
         ],
         nombre: "Matias",
      };
   },
   methods: {
      eliminar(index) {
         // Splice permite borrar un elemento dentro de un array indicando como parametro el indice del
         // elemento a borrar y como segundo parametro cuantos elementos borrar
         this.alumnos.splice(index, 1);
      },
      agregarAlumno() {
         let alu = {
            nombre: "Juan",
            apellido: "Arguello",
            edad: 23,
            curso: false,
            foto:
               "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png",
         };
         this.alumnos.push(alu);
      },
      getAlumnosAxios() {
         const url = "https://5f7e1dfc0198da0016893544.mockapi.io/alumnos";
         this.axios(url)
            .then((res) => {
               console.log(res.data);
               this.alumnos = res.data;
            })
            .catch((error) => console.log("ERROR GET HTTP", error));
      },
   },
   computed: {
      alumnosConCurso() {
         let cantidad2 = this.alumnos.filter((a) => a.curso).length;
         let totalA = this.alumnos.length;
         return {
            cantidad: cantidad2,
            total: totalA,
            ninguno: cantidad2 == 0,
            todos: cantidad2 == totalA,
         };
      },
   },
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: rgb(37, 78, 119);
   color: white;
}
hr {
   background-color: #ddd;
}
.table td,
.table th {
   vertical-align: middle;
}
</style>
