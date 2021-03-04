<template>
  <div>
    <h1>{{post[0] ? post[0].title : 'Post not found'}}</h1>
    <div v-html="post[0].body"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios, store }) {
    try {
      const post = await $axios.$get(`https://hellopermanentstrapi.herokuapp.com/posts?slug=${params.slug}`);
      return { post };
    } catch (e) {
      error({ statusCode: 404, message: "Страница не найдена" });
    }
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
  data: () => {},
  computed: {},
};
</script>

<style>
</style>