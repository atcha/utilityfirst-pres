import Vue from 'vue'
import Vuex from 'vuex'
import members from '../data/members';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarIsOpen: true,
    members: []
  },
  mutations: {
    changeSideBarState (state, payload) {
      state.sideBarIsOpen = payload
    },
    setMembers (state, members) {
      state.members = members
    },
    sortMembers (state, sort) {
      const members = this.state.members;
      members.sort((a, b) => {
        let compare = 0;
        if(sort.order === 'asc') {
          if (a[sort.sortKey] > b[sort.sortKey]) {
            compare = 1;
          } else if (b[sort.sortKey] > a[sort.sortKey]) {
            compare = -1;
          }
        } else {
          if (a[sort.sortKey] < b[sort.sortKey]) {
            compare = 1;
          } else if (b[sort.sortKey] < a[sort.sortKey]) {
            compare = -1;
          }
        }
        return compare;
      });
      state.members = members;
    }
  },
  actions: {
    fetchMembers({ commit }) {
      commit('setMembers', members.value)
    }
  },
  modules: {
  }
})
