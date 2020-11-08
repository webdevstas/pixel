<template>
  <div>
      <h1>Блог</h1>
    <b-row>
      <b-col v-for="post in this.posts" :key="post._id">
        <b-card
          :title="post.title"
          :img-src="`${post.image}`"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>{{post.excerpt}}</b-card-text>
          <nuxt-link :to="openPost(post.slug)">
            <b-button variant="primary">Читать</b-button>
          </nuxt-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  data: function () {
    return {};
  },
  computed: {
    posts: function () {
      return this.$store.getters["posts/posts"];
    },
    token: function () {
      return this.$store.getters["jwt/jwt"];
    },
  },
  methods: {
    openPost(slug) {
      return `/blog/${slug}`;
    },
  },
};
</script>

<style>
</style>