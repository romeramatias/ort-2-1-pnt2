import { createWebHistory, createRouter } from "vue-router";

import Bindings from "../components/Bindings.vue";
import Estructura from "../components/Estructura.vue";
import Atributos from "../components/Atributos.vue";
import Formulario from "../components/formulario/index.vue";
import FormularioVue from "../components/FormularioVue.vue";
import Http from "../components/Http.vue";


const routes = [
   { path: "/", name: "Inicio", component: Bindings },
   { path: "/bindings", name: "Bindings", component: Bindings },
   { path: "/estructura", name: "Estructura", component: Estructura },
   { path: "/atributos", name: "Atributos", component: Atributos },
   { path: "/formulario", name: "Formulario", component: Formulario },
   { path: "/formularioVue", name: "FormularioVue", component: FormularioVue },
   { path: "/http", name: "Http", component: Http },

];

const router = createRouter({ history: createWebHistory(), routes: routes });

export default router;
