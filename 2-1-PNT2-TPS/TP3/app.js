new Vue({
   el: "#app",
   data: {
      saludJugador: 0,
      saludMonstruo: 0,
      hayUnaPartidaEnJuego: false,
      turnos: [], //es para registrar los eventos de la partida
      esJugador: false,
      rangoAtaque: [3, 10],
      rangoAtaqueEspecial: [10, 20],
      rangoAtaqueDelMonstruo: [5, 12],
   },

   methods: {
      getSalud(salud) {
         return `${salud}%`;
      },
      empezarPartida: function () {
         this.saludJugador = 100;
         this.saludMonstruo = 0;
         this.hayUnaPartidaEnJuego = true;
         this.turnos = [];
      },
      atacar: function () {
         let danio = this.calcularHeridas(this.rangoAtaque);
         console.log(danio);
         this.saludMonstruo += danio;
         this.turnos.unshift({
            esJugador: true,
            text: `Estudiaste un par de horas y aprendiste un ${danio}% más de Vue`,
         });
         if (this.verificarGanador()) {
            return;
         }
         this.ataqueDelMonstruo();
      },

      ataqueEspecial: function () {
         let danio = this.calcularHeridas(this.rangoAtaqueEspecial);
         this.saludMonstruo += danio;
         this.turnos.unshift({
            esJugador: true,
            text: `Hiciste el TP que mandó Dani y ahora sabes ${danio}% más de Vue`,
         });
         if (this.verificarGanador()) {
            return;
         }
         this.ataqueDelMonstruo();
      },

      curar: function () {
          console.log(this.saludJugador);
         if (this.saludJugador <= 90) {
            this.saludJugador += 10;
            this.turnos.unshift({
                esJugador: true,
                text: `Dormiste 8 horas, ahora estas más fresco para seguir estudiando`,
             })
         } else if (this.saludJugador == 100) {
            this.turnos.unshift({
               esJugador: false,
               text: `Ya estas pila, ponete a estudiar y deja de dormir`,
            });
         } else {
            this.saludJugador = 100;
            this.turnos.unshift({
                esJugador: true,
                text: `Dormiste 8 horas, ahora estas mas fresco para seguir estudiando`,
             })
         }
;
      },

      registrarEvento(evento) {},

      terminarPartida: function () {
         this.hayUnaPartidaEnJuego = false;
         this.saludJugador = 0;
         this.saludMonstruo = 0;
         this.turnos = [];
      },

      ataqueDelMonstruo: function () {
         let danio = this.calcularHeridas(this.rangoAtaqueDelMonstruo);
         this.saludJugador -= danio;
         this.turnos.unshift({
            esJugador: false,
            text: `Estas cansado y ahora tenes ${danio}% menos de energia`,
         });
         this.verificarGanador();
      },

      calcularHeridas: function (rango) {
         let minimo = rango[0];
         let maximo = rango[1];
         return Math.max(Math.floor(Math.random() * maximo) + 1, minimo);
      },
      verificarGanador: function () {
         if (this.saludMonstruo >= 100) {
            if (confirm("Aprobaste la cursada!")) {
               this.empezarPartida();
            } else {
               this.hayUnaPartidaEnJuego = false;
            }
            return true;
         } else if (this.saludJugador < 1) {
            if (confirm("Desaprobaste. Recursar?")) {
               this.empezarPartida();
            } else {
               this.hayUnaPartidaEnJuego = false;
            }
            return true;
         }
         return false;
      },
      cssEvento(turno) {
         //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
         return {
            "player-turno": turno.esJugador,
            "monster-turno": !turno.esJugador,
         };
      },
   },
});
