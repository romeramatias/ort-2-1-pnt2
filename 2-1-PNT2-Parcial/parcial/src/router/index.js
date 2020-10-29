import { createWebHistory, createRouter } from "vue-router";

import Formulario from "../components/Formulario";
import Tabla from "../components/Tabla";
import Preguntas from "../components/Preguntas";

const routes = [
   { path: "/formulario", name: "Formulario", component: Formulario },
   { path: "/tabla", name: "Tabla", component: Tabla },
   { path: "/preguntas", name: "Preguntas", component: Preguntas},
];

const router = createRouter({ history: createWebHistory(), routes: routes });

export default router;
