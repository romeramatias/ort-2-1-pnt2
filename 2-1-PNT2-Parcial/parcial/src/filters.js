export default {
   methods: {
      formatoFecha: function(fecha) {
         return new Date(fecha).toLocaleString();
      },
      valorConSigno(valor) {
         return `$ ${valor}`;
      },
   },
};
