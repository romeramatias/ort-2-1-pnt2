import { createStore } from "vuex";

export default createStore({
   // Generar 3 cosas: State, Acciones y Mutations

   // State es como la data
   state() {
      return {
          contador: 13
      };
   },
   // Actions y mutations como los metodos
   actions: {
       // Las acciones se van a llamar desde los components a traves del metodo dispatch
       // Y las acciones van a llamar a las mutaciones
       contarUp(){
           
       }
   },
   mutations: {},
});
