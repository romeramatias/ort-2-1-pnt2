export default {
   methods: {
      pasarMayuscula: function(value) {
         return value.toUpperCase();
      },
      formatearFecha: function(fecha) {
         return new Date(fecha).toLocaleString();
      },
      reversa(valor) {
         return valor
            .split("")
            .reverse()
            .join("");
      },
      wrap(valor, inicio, final) {
         return inicio + valor + final;
      },
   },
};
