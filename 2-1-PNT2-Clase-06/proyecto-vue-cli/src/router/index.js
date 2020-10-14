import { createWebHistory, createRouter } from "vue-router";

import Bindings from "../components/Bindings.vue";
import Estructura from "../components/Estructura.vue";
import Atributos from "../components/Atributos.vue";
import Formulario from "../components/formulario/index.vue";

const routes = [
   { path: "/", name: "Inicio", component: Bindings },
   { path: "/bindings", name: "Bindings", component: Bindings },
   { path: "/estructura", name: "Estructura", component: Estructura },
   { path: "/atributos", name: "Atributos", component: Atributos },
   { path: "/formulario", name: "Formulario", component: Formulario },
];

const router = createRouter({ history: createWebHistory(), routes: routes });

export default router;
