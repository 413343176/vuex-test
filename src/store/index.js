import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    getStateCount(state) {
      return state.count + 1;
    }
  },
  actions: { //类似vue中的method
    addFun(context, num) {
      context.commit("add", num);
    },
    minusFun(context) {
      context.commit("minus");
    }
  },
  mutations: {
    add(state, num) {
      state.count = num + state.count;
    },
    minus(state) {
      state.count = --state.count;
    }
  }
})
export default store;