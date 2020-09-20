<template>
  <div>
    <main-carusel />
    <h1 class="title">Pixel Studio Sochi</h1>
    <b-icon-arrow-up></b-icon-arrow-up>
  </div>
</template>

<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "Pixel Studio Sochi",
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
    BIconArrowDown
  },
    async fetch({store}){
        if (store.getters['posts/jwt'] === ''){
            await store.dispatch('posts/authorize')
        }  
    },
    computed: {
      
  }
};

</script>

<style lang="sass" scoped>
</style>
  
