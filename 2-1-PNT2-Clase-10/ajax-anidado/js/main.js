console.log("Ajax Encadenado/Anidado 2");

const url = "https://jsonplaceholder.typicode.com/posts/";

//------------------------------------------------------------------------------------
// Fetch con async await | Ajax no anidado, en desorden
//------------------------------------------------------------------------------------

async function getPostFetch(id) {
   let response = await fetch(url + id);
   let datos = await response.json();
   console.log(datos);
}

/* getPostFetch(1);
getPostFetch(2);
getPostFetch(3);
getPostFetch(4);
getPostFetch(5);
getPostFetch(6) */

//------------------------------------------------------------------------------------
// Peticion asincronica usando Ajax con Fetch anidado, en orden
//------------------------------------------------------------------------------------

// Con promesas
function getPostFetchAnidado(id) {
   return fetch(url + id)
      .then((response) => {
         if (response.status != 200) throw ("Error en status", response.status);
         return response;
      })
      .then((response) => {
         return response.json();
      });
}

function getPostsFetchAnidado() {
   console.log("Inicio de peticiones");

   // Llega todo ordenado
   getPostFetchAnidado(1)
      .then((response) => {
         console.log(response);
         return getPostFetchAnidado(2);
      })
      .then((response) => {
         console.log(response);
         return getPostFetchAnidado(3);
      })
      .then((response) => {
         console.log(response);
         return getPostFetchAnidado(4);
      })
      .then((response) => {
         console.log(response);
      })
      .catch((error) => console.log("Error fetch", error));

   console.log("Fin de las peticiones");
}

getPostsFetchAnidado();
