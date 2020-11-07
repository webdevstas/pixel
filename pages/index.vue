<template>
  <div>
    <main-carusel />
    <b-container fluid>
    </b-container>
  </div>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from "bootstrap-vue";
export default {
  layout: 'home',
  data() {
    return {};
  },
  head() {
    return {
      title: "HELLO Permanent",
      meta: [
        {
          name: "description",
          content: "Обучение перманентному макияжу в Сочи",
        },
      ],
    };
  },
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown,
  },
  computed: {},
};
</script>

<style lang="sass" scoped>
</style>
  
