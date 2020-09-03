<template>
  <div>
    <b-row>
      <h1>Блог</h1>
    </b-row>
    <b-row>
      <b-col><b-button style="margin-bottom: 30px" variant="primary" @click="openPostForm">{{isPostFormOpened ? 'Отмена' : 'Добавить пост'}}</b-button></b-col>
      <new-post-form v-if="isPostFormOpened"/>
    </b-row>
    <b-row>
      <b-col v-for="post in this.posts" :key="post._id">
        <b-card
          :title="post.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>{{post.body}}</b-card-text>
          <nuxt-link :to="openPost(post.alias)"><b-button variant="primary">Open</b-button></nuxt-link>
          <b-button type="reset" variant="danger" @click ="deletePost(post.alias)">Удалить</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    async fetch({store}){
        if (store.getters['posts/posts'].length === 0){
            await store.dispatch('posts/fetch')
        }  
    },
  data: function () {
    return {
      isPostFormOpened: false
    };
  },
  computed: {
      posts: function(){
          return this.$store.getters['posts/posts']
      }
  },
  
  methods: {
    openPost(alias){
      return `/blog/${alias}`
    },
    deletePost: async function (alias){
      try {
        await this.$axios.delete(`http://localhost:33310/api/posts/${alias}`)
      } catch (e) {
        throw e
      }
      await this.$store.dispatch('posts/fetch')
    },
    openPostForm: function(){
      this.isPostFormOpened = !this.isPostFormOpened
    }
  }
};
</script>

<style>
</style>