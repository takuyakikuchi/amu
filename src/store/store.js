import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navOpen: false
  },
  mutations: {
    TOGGLE_NAV(state) {
      state.navOpen = !state.navOpen;
    }
  },
  actions: {
    toggleNav: ({ commit }) => {
      commit("TOGGLE_NAV");
    }
  },
  getters: {
    navOpen: state => {
      return state.navOpen;
    }
  }
});
