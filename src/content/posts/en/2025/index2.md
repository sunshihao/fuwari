---
title: How to Use Vuex Helper Functions in Vue
published: 2024-05-22
description: "How to Use Vuex Helper Functions in Vue"
# image: "./cover.jpeg"
tags: ["vue", "front-end"]
category: front-end
lang: "en"
draft: false
---

Reference: Vuex Official Documentation

1. Importing in the Page
js
复制
编辑
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
Import the helper functions into the Vue page.

2. Using in the Page
js
复制
编辑
computed: {
  ...mapState('xxxMaterial', ['xxxList'])
}
Use mapState and mapGetters within the computed property. The mapped state/getters will be attached directly to this, and can be accessed using this.xxxList, etc.

js
复制
编辑
methods: {
  ...mapActions('xxxMaterial', ['queryList']),
}
Use mapMutations and mapActions inside the methods property.

In more complex projects, different Vuex store modules may need to call each other. For example:

js
复制
编辑
saveMaterialApp({ commit, state, rootState, rootGetters }, {
   remark
}) {
  // Combine parameters for saving
  let params = {
    ...rootState.material.xxx.xxx, // Referencing state from another namespace
    remark
  }
  return app.saveMaterial(params).then(
    ...
  ).catch(err => {
    return false;
  })
}
In actions, you can directly use rootState and rootGetters to access state and getters from other namespaces.

js
复制
编辑
actions: {
  // In this module, dispatch and commit are also scoped locally
  // They can accept a `root` option to access the root-level dispatch or commit
  someAction({ dispatch, commit, getters, rootGetters }) {
    getters.someGetter // -> 'foo/someGetter'
    rootGetters.someGetter // -> 'someGetter'
    rootGetters['bar/someGetter'] // -> 'bar/someGetter'

    dispatch('someOtherAction') // -> 'foo/someOtherAction'
    dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

    commit('someMutation') // -> 'foo/someMutation'
    commit('someMutation', null, { root: true }) // -> 'someMutation'
  },
  someOtherAction(ctx, payload) { ... }
}
Compared with Pinia, Pinia is generally recommended over Vuex. It provides better support and a more optimized experience when working with Vue 3.