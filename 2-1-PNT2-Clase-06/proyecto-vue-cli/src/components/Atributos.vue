<template>
  <section class="src-components-atributos">
    <div class="jumbotron">
      <h2>Directivas de Atributos</h2>
      <hr />
      <h4><u>:style</u></h4>
      <button
        type="button"
        class="btn btn-info my-3"
        @click="estilo1 = !estilo1"
      >
        Cambiar
      </button>
      <p
        :style="{
          color: 'white',
          'background-color': estilo1 ? 'grey' : 'crimson',
          borderRadius: '10px',
          padding: '10px',
        }"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        praesentium quibusdam laboriosam repellendus amet numquam optio cumque
        eos aut minus, recusandae mollitia delectus? Obcaecati explicabo
        voluptatibus commodi recusandae quaerat cum.
      </p>

      <h4><u>:class</u></h4>
      <button
        type="button"
        class="btn btn-info my-3"
        @click="estilo2 = !estilo2"
      >
        Cambiar
      </button>
      <!--<p :class="[{'bg-success': estilo2, 'bg-warning': !estilo2},'text-white', 'p-2']">-->
      <p
        :class="{
          'bg-success': estilo2,
          'bg-warning': !estilo2,
          'text-white': true,
          'p-2': true,
        }"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        praesentium quibusdam laboriosam repellendus amet numquam optio cumque
        eos aut minus, recusandae mollitia delectus? Obcaecati explicabo
        voluptatibus commodi recusandae quaerat cum.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-atributos",
  props: [],
  mounted() {},
  data() {
    return { estilo1: true, estilo2: true };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(119, 43, 37);
  color: white;
}
</style>
