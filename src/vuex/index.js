"use strict";

import {
  createActions,
  createCommit,
  createDispatch,
  createGetters,
  createMutations,
  createReactiveState,
} from "./creators";

class Store {
  constructor(options) {
    const { state = {}, actions = {}, mutations = {}, getters = {} } = options;
    this._mutations = Object.create(null);
    this._actions = Object.create(null);
    this.getters = Object.create(null);
    createReactiveState(this, state);
    createActions(this, actions);
    createMutations(this, mutations);
    createGetters(this, getters);
    createDispatch(this, this.dispatch);
    createCommit(this, this.commit);
  }

  get state() {
    return this._state;
  }

  dispatch(actionType, payload) {
    this._actions[actionType](payload);
  }

  commit(mutationType, payload) {
    this._mutations[mutationType](payload);
  }
}

// 安装插件
function install(Vue) {
  Vue.mixin({
    // 每个组件都会执行这个方法
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store; // 根元素
      } else {
        this.$store = this.$parent.$store; // 其他所有子元素
      }
    },
  });
}

export default {
  install,
  Store,
};
