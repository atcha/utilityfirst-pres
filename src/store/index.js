import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarIsOpen: true
  },
  mutations: {
    changeSideBarState (state, payload) {
      state.sideBarIsOpen = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
