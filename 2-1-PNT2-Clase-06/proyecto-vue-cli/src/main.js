import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VuelidatePlugin } from "@vuelidate/core";
import axios from "axios";
import VueAxios from "vue-axios";

// Importamos las lib bootstrap, jquery que instalamos
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
   .use(router)
   .use(VuelidatePlugin)
   .use(VueAxios, axios)
   .mount("#app");

// npm i axios
// npm i vue-axios
// npm install @vuelidate/core @vuelidate/validators
// npm i vue-router@next
// vgc ruta y nombre de componente
