import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {}
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedUser(state) {
      return state.user;
    }
  },
  mutations,
  actions
});
