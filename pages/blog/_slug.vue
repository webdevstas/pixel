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
      const post = await $axios.$get(`http://localhost:1337/posts?slug=${params.slug}`);
      return { post };
    } catch (e) {
      error({ statusCode: 404, message: "Страница не найдена" });
    }
  },
  data: () => {},
  computed: {},
};
</script>

<style>
</style>