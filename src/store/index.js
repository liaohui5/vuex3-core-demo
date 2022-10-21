"use strict";
import Vue from "vue";
import Vuex from "@/vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hits: 1,
  },
  actions: {
    setHitsAction({ commit }, payload) {
      commit("setHitsMutation", payload);
    },
  },
  mutations: {
    setHitsMutation(state, { hits }) {
      state.hits = hits;
    },
  },
  getters: {
    hitsText(state) {
      return `click: 点击了${state.hits} 次`;
    },
  },
});
