"use strict";

import Vue from "vue";
import { forIn } from "./utils";

// 创建响应式数据
export function createReactiveState(store, originStates) {
  Vue.util.defineReactive(store, "_state", originStates);
}

// 创建 actions
export function createActions(store, originActions) {
  forIn(originActions, function (actionKey, actionItem) {
    store._actions[actionKey] = function (payload) {
      actionItem.call(store, store, payload);
    };
  });
}

// 创建 muations
export function createMutations(store, originMutations) {
  forIn(originMutations, function (mutationKey, mutationItem) {
    store._mutations[mutationKey] = function (payload) {
      mutationItem.call(store, store.state, payload);
    };
  });
}

// 创建getters
export function createGetters(store, getters) {
  forIn(getters, function (key, getterItem) {
    Object.defineProperty(store.getters, key, {
      get() {
        return getterItem(store.state);
      },
    });
  });
}

// 创建 dispatch/commit 如果是结构出来的, this 的指向不会指向 Store 实例
// 所以必须要重新包装一下, 让 this 指向变成 store 实例
// 为什么要重新赋值, 而不是直接 bind ?
// 因为重新赋值更加利于扩展
export function createDispatch(store, originDispatch) {
  store.dispatch = function (type, payload) {
    originDispatch.call(store, type, payload);
  };
}

// 创建 commit
export function createCommit(store, originCommit) {
  store.commit = function (type, payload) {
    originCommit.call(store, type, payload);
  };
}
