console.log("Promesas en JS");

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

// Resuelve la promesa automaticamente con exito
// Devuelve una promesa donde da una respuesta
Promise.resolve(21)
   .then((respuesta) => respuesta * 2)
   .then((respuesta) => {
      if (respuesta != 42) throw respuesta;
      return respuesta;
   })
   .then((respuesta) => {
      console.log("Ok", respuesta);
   })
   .catch((error) => {
      console.error("Error", error);
   });

// Por defecto devuelve reject
/* Promise.reject("Promesa no cumplida")
   .then((respuesta) => {
      console.log("Ok", respuesta);
   })
   .catch((error) => {
      console.error("Error:", error);
   }); 
*/

const retardo = (ms, mensaje) =>
   new Promise((res, rej) => {
      if (typeof ms == "number") {
         setTimeout(() => {
            res(mensaje + " " + ms);
         }, ms);
      } else {
         let error = {
            title: "Debe ser tipo number",
            ms,
            mensaje,
            type: typeof ms,
         };
         rej(error);
      }
   });

function tiempoActual(mensaje) {
   console.log(mensaje, Date().toLocaleString());
}

/* tiempoActual("Inicio retardo");
retardo(2000, "Fin retardo")
   .then((response) => {
      console.log(response);
      tiempoActual("Fin retardo");
   }) // es igual a '.then(console.log)'
   .catch((error) => console.error(error)); */ // es igual a '.then(console.error)'

// ----------------------------------------------------------------------------------------------------------
// Promise.race: Carrera de Promesas
// ----------------------------------------------------------------------------------------------------------

// Devuelve la que se resuelve mas rapido
tiempoActual("Inicio de carrera");
Promise.race([retardo(3000, "Promesa 1"), retardo(2000, "Promesa 2"), retardo(8000, "Promesa 3")])
   .then((response) => {
      console.log(response);
      tiempoActual("Fin de carrera");
   })
   .catch(console.error);

// ----------------------------------------------------------------------------------------------------------
// Promise.all: Todas las Promesas
// ----------------------------------------------------------------------------------------------------------

// Es lo mismo que .race pero se tienen que cumplir todas