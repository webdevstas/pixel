export const state = () => ({
    jwt: ''
})

export const mutations = {
    setToken(state, token) {
        state.jwt = token
    }
}
export const actions = {
    async authorize({commit}){
        try {
            const { res } = await this.$axios.post('http://localhost:1337/auth/local', {
                identifier: 'nuxt',//достаём из .env
                password: 'Nuxt12345',//достаём из .env
            });
            commit('setToken', res.jwt);
            console.log(res)
        } 
        catch (er) {
            console.error('Authorisation failed', er)
        }
        
    }
}
export const getters = {
    jwt: function (){
        return state.jwt
    }
}




