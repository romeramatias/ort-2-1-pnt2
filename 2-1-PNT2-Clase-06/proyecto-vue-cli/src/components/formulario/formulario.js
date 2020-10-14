export default {
   name: "formulario",
   components: {},
   props: [],
   data() {
      return {
         formu: this.resetForm(),
         url: "https://5f7e1dfc0198da0016893544.mockapi.io/datosForm",
      };
   },
   computed: {},
   mounted() {
      this.getDatosForm();
   },
   methods: {
      sendDatosForm(datos) {
         console.log(datos);
         console.log(JSON.stringify(datos));
         fetch(this.url, {
            method: "post",
            body: JSON.stringify(datos),
            headers: {"content-type": "application/json"}

         })
            .then((res) => res.json())
            .then((json) => console.log(json));
      },
      getDatosForm() {
         fetch(this.url)
            .then((res) => res.json())
            .then((json) => console.log(json));
      },
      enviar() {
         console.log(this.formu);
         this.sendDatosForm({ nombre: this.formu.nombre.value, edad: this.formu.edad.value });
         this.formu = this.resetForm();
      },
      resetForm() {
         return { nombre: { value: "", dirty: false }, edad: { value: "", dirty: false } };
      },
   },
};
