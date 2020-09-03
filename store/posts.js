export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}
export const actions = {
    async fetch({ commit }) {
        try {
            const posts = await this.$axios({
                method: 'get',
                url: 'http://localhost:33310/api/posts'
            })
            commit('setPosts', posts.data);
        }
        catch (err){
            console.log(err)
        }
    }
}
export const getters = {
    posts: function (state) {
        return state.posts
    }
}
