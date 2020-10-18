console.log("Ajax Encadenado/Anidado");

// Comunicaciones asincronicas con AJAX
// Endpoint
const url = "https://jsonplaceholder.typicode.com/posts/";

//------------------------------------------------------------------------------------
// PETICION ASINCRONICA
// Usando AJAX NO anidado
//------------------------------------------------------------------------------------

function getPost(id) {
   let xhr = new XMLHttpRequest();
   xhr.open("get", url + id);
   xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
         let respuesta = JSON.parse(xhr.response);
         console.log(respuesta);
      } else {
         console.log("Error");
      }
   });
   xhr.send();
}

function getPosts() {
   // Al ser asincronico puede llegar en cualquier orden, no bloquea la ejecucion
   console.log("Inicio de peticiones");
   getPost(1);
   getPost(2);
   getPost(3);
   console.log("Fin de las peticiones");
}

//getPost(21);
//getPosts();

//------------------------------------------------------------------------------------
// AJAX CALLBACKS
//------------------------------------------------------------------------------------

function getPostCb(id, cb) {
   let xhr = new XMLHttpRequest();
   xhr.open("get", url + id);
   xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
         let respuesta = JSON.parse(xhr.response);
         console.log(respuesta);
         if (cb) cb(respuesta);
      }
   });
   xhr.send();
}

function getPostsCb() {
   // Quilombo con callbacks hell
   // Hace que se ejecute en orden pero queda hecho un bardo
   console.log("Inicio de peticiones");
   getPostCb(1, (respuesta) => {
      getPostCb(2, (respuesta) => {
         getPostCb(3, (respuesta) => {});
      });
   });
   console.log("Fin de las peticiones");
}

// No me funciono revisar
// getPostCb();

//------------------------------------------------------------------------------------
// AJAX PROMESAS
//------------------------------------------------------------------------------------
function getPostPromise(id) {
   // Tiene que retornar algo, espere a que la peticion llegue
   // Recibe como parametro un callback
   // Que a su vez lleva dos callbacks (res, rej)
   return new Promise((res, rej) => {
      let xhr = new XMLHttpRequest();
      xhr.open("get", url + id);
      xhr.addEventListener("load", () => {
         if (xhr.status === 200) {
            let respuesta = JSON.parse(xhr.response);
            console.log(respuesta);
            res(respuesta);
         } else {
            // Res y rej solo pueden devolver un parametro
            let error = {
               type: "error status",
               body: xhr.status,
            };
            rej(error);
         }
      });
      xhr.addEventListener("Error", (e) => {
         let error = {
            type: "error ajax",
            body: e,
         };
         rej(error);
      });
      xhr.send();
   });
}

function getPostsPromise() {
   console.log("Inicio de peticiones");
   getPostPromise(1)
      .then((respuesta) => getPostPromise(2))
      .then((respuesta) => getPostPromise(3))
      .then((respuesta) => getPostPromise(4))
      .then((respuesta) => getPostPromise(5))
      .catch((error) => console.log("Error"));
}

//getPostPromise(21);
//getPostsPromise();

//------------------------------------------------------------------------------------
// PROMESAS CON CONSOLE LOG INTERNO CON ASYNC AWAIT
//------------------------------------------------------------------------------------
async function getPostsPromiseAsyncAwait1() {
   console.log("Inicio de peticiones");
   try {
      await getPostPromise(1);
      await getPostPromise(2);
      await getPostPromise(3);
      await getPostPromise(4);
      await getPostPromise(5);
   } catch (error) {
      console.log("Error");
   }
   console.log("Fin de peticiones");
}

//getPostsPromiseAsyncAwait1();

//------------------------------------------------------------------------------------
// PROMESAS SIN CONSOLE LOG INTERNO CON ASYNC AWAIT
//------------------------------------------------------------------------------------
async function getPostsPromiseAsyncAwait2() {
   console.log("Inicio de peticiones");
   // Se esta imprimiendo dos veces porque tengo que cambiar la funcion que invoca, eso del node bug, revisar
   try {
      for (let i = 1; i <= 5; i++) {
         let respuesta = await getPostPromise(i, true);
         console.log(respuesta);
      }
   } catch (error) {
      console.log("Error");
   }
   console.log("Fin de peticiones");
}

getPostsPromiseAsyncAwait2();