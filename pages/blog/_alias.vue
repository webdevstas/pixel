<template>
<div>
  <h1>{{post ? post.title : 'Post not found'}}</h1>
  <p>{{post ? post.body : ''}}</p>
  </div>
</template>

<script>
export default {
    async asyncData({params, error, $axios}){
        try {
            const post = await $axios.$get(`http://localhost:33310/api/posts/${params.alias}`)
            return {post}
        }
        catch (e){
            error({ statusCode: 404, message: 'Страница не найдена' })
        }
    },
    data: () => {
       
    },
    computed: {
    }
}

</script>

<style>

</style>