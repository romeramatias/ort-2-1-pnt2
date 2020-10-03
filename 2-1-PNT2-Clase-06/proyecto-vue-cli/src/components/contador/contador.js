export default {
   name: "src-components-contador",
   components: {},
   props: ['init', 'color'],
   data() {
      return {
         cont: Number(this.init) || 0,
      };
   },
   computed: {},
   mounted() {},
   methods: {
      contar() {
         this.cont++;
      },
      getColor() {
         return "btn-" + this.color;
      },
   },
};
