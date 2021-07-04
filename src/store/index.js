import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem("token")
  },
  mutations: {
    setToken(state, value) {
      localStorage.setItem('token', value)
      state.token = value
    },
    logOut(state) {
      localStorage.removeItem('token')
      state.token = ''
    }
  }
})
