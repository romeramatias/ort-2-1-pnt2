import { createStore } from "vuex";

export default createStore({
   // Generar 3 cosas: State, Acciones y Mutations

   // State es como la data
   state() {
      return {
         contador: 13,
      };
   },
   // Actions y mutations como los metodos
   actions: {
      // Las acciones se van a llamar desde los components a traves del metodo dispatch
      // Y las acciones van a llamar a las mutaciones
      contarUp({ commit }, cant) {
         commit("incrementar", cant);
      },
      contarDown({ commit }, cant) {
         commit("decrementar", cant);
      },
   },
   mutations: {
      // No se permite asincronismo
      // Para realizar la mutacion debe conocer el estado anterior del state
      // y la cantidad y el dato con el cual se va a incrementar
      incrementar(state, cant) {
         state.contador += cant;
      },
      decrementar(state, cant) {
         state.contador -= cant;
      },
   },
});
