export default {
   name: "juego",
   components: {},
   props: ["colorJugar", "colors", "mensaje", "color", "index", "conocerGanador"],
   created(){
      this.restart();
   },
   data() {
      return {
         colorCount: 6,
         isHard: true,
         colorJugar: {
            r: 0,
            g: 0,
            b: 0,
         },
         colors: [],
         mensaje: "",
         colorclickeado: "",
         backgroundColor: `rgb(${this.color.r},${this.color.g},${this.color.b})`,
      };
   },
   computed: {},
   mounted() {},
   methods: {
      restart() {
         this.colors.splice(0, this.colors.length, ...this.createNewColors(this.colorCount));
         let pickedColor = this.colors[this.pickColor()];
         this.colorJugar.r = pickedColor.r;
         this.colorJugar.g = pickedColor.g;
         this.colorJugar.b = pickedColor.b;
      },

      juegoDificil() {
         if (!this.isHard) {
            this.cantCuadrados = 6;
            this.isHard = true;
            this.restart();
            console.log(this.isHard);
         }
      },

      juegoFacil() {
         if (this.isHard) {
            this.cantCuadrados = 3;
            this.isHard = false;
            this.restart();
            console.log(this.isHard);
         }
      },

      randomInt() {
         return Math.floor(Math.random() * 256);
      },

      createNewColors(numbers) {
         let arr = [];
         for (var i = 0; i < numbers; i++) {
            arr.push(this.createRandomStringColor());
         }
         return arr;
      },

      pickColor() {
         let quantity = 3;
         if (this.isHard) {
            quantity = 6;
         }
         return Math.floor(Math.random() * quantity);
      },

      mostrarColor() {
         this.colorclickeado = this.color;
         this.conocerGanador(this.colorclickeado, this.index);
      },

      conocerGanador(colorcuadrado, cuadradoIndex) {
         if (JSON.stringify(colorcuadrado) === JSON.stringify(this.colorJugar)) {
            this.mensaje = "Ganaste";
            for (let index = 0; index < this.colors.length; index++) {
               Object.assign(this.colors[index], colorcuadrado);
            }
         } else {
            this.mensaje = "Intenta de nuevo";
            // le pongo el color del body para que parezca que desaparece
            this.colors[cuadradoIndex].r = 35;
            this.colors[cuadradoIndex].g = 35;
            this.colors[cuadradoIndex].b = 35;
         }
      },

      myKey(color) {
         const randomNumber = Math.random() * 100000;
         return "" + randomNumber + color.r + color.g + color.b;
      },
   },
};
