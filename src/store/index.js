import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';


export default createStore({
  plugins: [createPersistedState()],
  state: {
    token:'',
    user: {username: '', iat: 0, exp: 0},
  },
  getters: {
    getToken(state) {
      return state.token;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
