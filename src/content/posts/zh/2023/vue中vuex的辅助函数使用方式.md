---
title: vue中vuex的辅助函数使用方式
published: 2023-10-11
description: "vue中vuex的辅助函数使用方式"
tags: ["vue", "vuex","front-end"]
category: front-end
lang: "zh"
draft: false
---

参考 [vuex官网](https://vuex.vuejs.org/zh/)

### 1.页面引入

```
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
```
在vue的页面中引用辅助函数

### 2.页面中使用

```
computed: {
	...mapState('xxxMaterial', ['xxxList'])
}
```
其中 mapState,mapGetters在computed中引用, 此时参数直接挂载到了页面的this中，直接this.引用即可。
```
methods: {
	...mapActions('xxxMaterial', ['queryList']),
}
```
mapMutations,mapActions在methods中引用
在工程中使用若是store的设置复杂后，会产生store之间调用的场景。
```
saveMaterialApp({ commit, state, rootState, rootGetters }, {
   remark
}) {
  // 保存参数整合
  let params = {
    ..rootState.material.xxx.xxx, // 引用了其他namespace中state的参数
    remark
  }
  return app.saveMaterial(params).then(
                         ...
  ).catch(err => {
     return false;
 })
}
```
而在actions中，可以直接通过参数rootState和rootGetters直接调用其余namespace中的参数。
```
actions: {
      // 在这个模块中， dispatch 和 commit 也被局部化了
      // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'
        rootGetters['bar/someGetter'] // -> 'bar/someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
}
```
与pinia相比，更推荐使用pinia, 其与vuex相比对于vue3的支持使用更加优化友好。