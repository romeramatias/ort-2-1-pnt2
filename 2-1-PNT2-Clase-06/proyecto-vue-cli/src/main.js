import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //"./router";
import { VuelidatePlugin } from "@vuelidate/core";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";

// Importamos las lib bootstrap, jquery que instalamos
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);
app.use(VuelidatePlugin);
app.use(VueAxios, axios);
app.use(store)
app.mount("#app");

// npm i axios
// npm i vue-axios
// npm install @vuelidate/core @vuelidate/validators
// npm i vue-router@next
// vgc ruta y nombre de componente
// npm install --save bootstrap bootstrap/dist/css/bootstrap.min.css jquery popper.js
