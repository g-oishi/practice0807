import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  drawer: false,
  navLists: []
}

const getters = {
  drawer: state => state.drawer,
  navLists: state => state.navLists
}

const mutations = {
  setDrawer (state, drawer) {
    state.drawer = drawer
  },
  setNavLists (state, navLists) {
    state.navLists = navLists
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
  // plugins: [createPersistedState()]
})
