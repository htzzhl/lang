import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  age: 18,
  name: "hahaha",
  job: "coder",
  num: 0
};

const mutations = {
  addNum: function() {
    state.age++;
  },
  reduceNum: function() {
    state.age--;
  }
};

const actions = {
  addNumPro(obj) {
    console.log(obj);
  },
  reduceNumPro(obj) {
    console.log(obj);
  }
};

const getters = {
  addGetters(state) {
    return (state.num += 100);
  }
};

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
