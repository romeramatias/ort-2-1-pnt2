<template>
   <section class="src-components-http">
      <div class="jumbotron">
         <h2>HTTP</h2>
         <hr />

         <button class="btn btn-success mx-3" @click="getAlumnosAxios()">
            GET
         </button>

         <button class="btn btn-info mx-3" @click="postAlumnoAxios()">
            POST
         </button>

         <div
            class="media alert alert-info mt-4"
            v-for="(alumno, index) in alumnos"
            :key="index"
         >
            <img
               :src="alumno.foto"
               width="200"
               :style="{ 'border-radius': '20px' }"
               :alt="alumno.nombre"
            />
            <div class="media-body ml-3">
               <h4>Alumno {{ index + 1 }} | ID: {{ alumno.id }}</h4>
               <p>
                  Nombre:
                  <b
                     ><a :href="alumno.foto"
                        >{{ alumno.nombre }} {{ alumno.apellido }}</a
                     ></b
                  >
               </p>
               <p>
                  Edad: <b>{{ alumno.edad }}</b>
               </p>
               <p>
                  Curso: <i>{{ alumno.curso ? "Si" : "No" }}</i>
               </p>

               <button
                  class="btn btn-warning m-3"
                  @click="putAlumnoAxios(alumno.id)"
               >
                  PUT
               </button>

               <button
                  class="btn btn-danger m-3"
                  @click="deleteAlumnoAxios(alumno.id)"
               >
                  DELETE
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-http",
   props: [],

   // HOOKS LIFECYCLE
   beforeCreate() {
      console.log("beforeCreate");
   },
   created() {
      console.log("created");
   },
   beforeMount() {
      console.log("Before Mount");
   },
   mounted() {
      //this.getAlumnosAxios();
      console.log("mounted");
   },
   beforeUpdate() {
      console.log("beforeUpdate");
   },
   updated() {
      console.log("updated");
   },
   beforeUnmount() {
      console.log("beforeUnmount");
   },
   unmounted() {
      console.log("unmounted");
   },
   data() {
      return {
         alumnos: [],
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/alumnos/",
      };
   },
   methods: {
      async getAlumnosAxios() {
         try {
            let res = await this.axios(this.url);
            console.log(res.data);
            this.alumnos = res.data;
         } catch (error) {
            console.log("ERROR GET HTTP", error);
         }
      },
      async postAlumnoAxios() {
         let al = {
            nombre: "Matias",
            apellido: "Romera",
            edad: 24,
            curso: true,
            foto: "https://romeramatias.github.io/img/CV-Foto-2.jpg",
         };
         try {
            let res = await this.axios.post(this.url, al, {
               "content-type": "application/json",
            });
            console.log(res.data);
            this.alumnos.push(res.data);
         } catch (error) {
            console.log("ERROR POST HTTP", error);
         }
      },
      async putAlumnoAxios(id) {
         console.log(id);
         let al = {
            nombre: "Jon",
            apellido: "Snow",
            edad: 35,
            curso: true,
            foto: "https://romeramatias.github.io/img/CV-Foto-2.jpg",
         };

         try {
            let res = await this.axios.put(this.url + id, al, {
               "content-type": "application/json",
            });
            let alumno = res.data;
            console.log(alumno);
            let offset = this.alumnos.findIndex((alumno) => alumno.id == id);
            this.alumnos.splice(offset, 1, alumno);
         } catch (error) {
            console.log("ERROR PUT HTTP", error);
         }
      },
      async deleteAlumnoAxios(id) {
         try {
            let res = await this.axios.delete(this.url + id);
            let alumno = res.data;
            console.log(alumno);
            let offset = this.alumnos.findIndex((alumno) => alumno.id == id);
            this.alumnos.splice(offset, 1);
         } catch (error) {
            console.log("ERROR PUT HTTP", error);
         }
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: rgb(85, 108, 235);
   color: white;
}
</style>
