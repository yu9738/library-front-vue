import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    isLogin: false,
    userName: '',
    userId: '',
    token: '',
    role:'',
  },
  getters: {

  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true
      state.userName = payload.userName
      state.token = payload.token
      state.role = payload.role
      state.userId = payload.userId
    },
    logout(state) {
      state.isLogin = false;
      state.userName='';
      state.token='';
      state.role='';

      localStorage.removeItem("access_token")
    },
    loginCheck: function (state) {
      if (!state.isLogin) {
        router.push({
          name: 'login'
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  actions: {

  },
  modules: {},
  //vuex plugin 명시
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]

})
