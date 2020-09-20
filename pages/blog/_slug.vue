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
      if (store.getters["posts/jwt"] === "") {
        await store.dispatch("posts/authorize");
      }
      const token = await store.getters["posts/jwt"];
      const post = await $axios.$get(
        `http://localhost:1337/posts?slug=${params.slug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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