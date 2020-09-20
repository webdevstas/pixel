export const state = () => ({
    posts: [],
    jwt: ''
})

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setToken(state, token) {
        state.jwt = token
    }
}
export const actions = {
    async fetch({ commit, state }) {
        try {
            const posts = await this.$axios({
                method: 'get',
                url: 'http://localhost:1337/posts',
                headers: {
                    Authorization: `Bearer ${state.jwt}`
                }
            })
            commit('setPosts', posts.data);
        }
        catch (err) {
            console.log(err)
        }
    },
    async authorize({commit}){
        const { data } = await this.$axios.post('http://localhost:1337/auth/local', {
                identifier: 'nuxt',
                password: 'Nuxt12345',
            });
        commit('setToken', data.jwt);
    }
}
export const getters = {
    posts: function (state) {
        return state.posts
    },
    jwt: function (state){
        return state.jwt
    }
}
