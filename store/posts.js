export const state = () => ({
    posts: [] 
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}
export const actions = {
    async fetch({ commit, state }) {
        try {
            const posts = await this.$axios({
                method: 'get',
                url: 'http://localhost:1337/posts',
            })
            commit('setPosts', posts.data)
        }
        catch (err) {
            console.log(err)
        }
    }
}
export const getters = {
    posts: function (state) {
        return state.posts
    }
}

