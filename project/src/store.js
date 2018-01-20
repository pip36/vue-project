import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [CreatePersistedState()],
    state: {
      auth: {
        accessToken: null,
        idToken: null
      }  
    },
    mutations: {
      setTokens (state, tokens) {
        state.auth.accessToken = tokens.accessToken
        state.auth.idToken = tokens.idToken
      },
      clearTokens (state) {
        state.auth.accessToken = null
        state.auth.idToken = null
      }
    }
})

export default store