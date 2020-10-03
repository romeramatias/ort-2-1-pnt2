export default {
   name: "juego",
   components: {},
   props: [],
   data() {
      return {
         cantCuadrados: 6,
         dificil: true,
      };
   },
   computed: {},
   mounted() {},
   methods: {
      reiniciar() {},

      juegoDificil() {
         if (!this.dificil) {
            this.cantCuadrados = 6;
            this.dificil = true;
            this.reiniciar();
            console.log(this.dificil);
         }
      },

      juegoFacil() {
         if (this.dificil) {
            this.cantCuadrados = 3;
            this.dificil = false;
            this.reiniciar();
            console.log(this.dificil);
         }
      },

      randomInt() {
         return Math.floor(Math.random() * 256);
      },
   },
};
