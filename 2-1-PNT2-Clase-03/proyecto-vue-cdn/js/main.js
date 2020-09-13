Vue.component("contador", {
   data() {
      return {
         cont: Number(this.init) || 0,
      };
   },
   props: ['init', 'color'],
   methods: {
      contar() {
         this.cont++
      },
      getColor(){
         return 'btn-' + this.color
      }
   },
   template: `<button :class="['btn', getColor()]" @click="contar()">Contar {{cont}}</button>`
});

let app = new Vue({
   /* El es un objeto, representa el selecctor de un elemento al que se va a conectar*/
   el: "#app",

   /* Otro campo es data, otro objeto, tiene las propiedades y variables que va a tener acceso la vista */
   data: {
      mensaje: "Soy un mensaje",
      mensajeHTML: "<i>Soy un mensaje</i>",
      contador: 123,
      contador2: 456,
      contador3: 789,
      valor: 666,
      valor2: 777,
      valor3: 888,
      mostrar: true,
      mostrar2: true,
      personas: ["Matias", "Juan", "Daniel", "Pedro"],
      alumnos: [
         {
            nombre: "Matias",
            apellido: "Romera",
            edad: 24,
            curso: true,
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png",
         },
         {
            nombre: "Federico",
            apellido: "Mateucci",
            edad: 20,
            curso: true,
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
         },
         {
            nombre: "Florencia",
            apellido: "Garduno",
            edad: 21,
            curso: true,
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
         },
         {
            nombre: "Julian",
            apellido: "Grilli",
            edad: 22,
            curso: false,
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png",
         },
      ],
      nombre: "Matias",
      estilo1: true,
      estilo2: true,
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
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png",
         };
         this.alumnos.push(alu);
      },
   },
   computed: {
      // Computed se veria como data, se lo puede llamar con alumnosConCurso.xxx
      alumnosConCurso() {
         // Forma 1
         /*          let cantidad1 = 0;
         this.alumnos.forEach((a) => {
            if (a.curso === true) {
               cantidad++;
            }
         }); */

         // Forma 2
         let cantidad2 = this.alumnos.filter((a) => a.curso).length;
         let totalA = this.alumnos.length;
         // Computed devuelve un objeto con distintos atributos
         return {
            cantidad: cantidad2,
            total: totalA,
            ninguno: cantidad2 == 0,
            todos: cantidad2 == totalA,
         };
      },
   },
});
