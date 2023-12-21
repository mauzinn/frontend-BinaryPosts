import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    role: ""
  },
  getters: {
  },
  mutations: {
    SET_DATA(state, data) {
      state.name = data.name
      state.role = data.role
    }
  },
  actions: {
  },
  modules: {
  }
})
