// src/store.js

// 实现状态响应式
// 将 _wrappedGetters 作为computed 属性
function resetStoreVM (store, state, hot) {
  const oldVm = store._vm

  // bind store public getters
  store.getters = {}
  const wrappedGetters = store._wrappedGetters
  const computed = {}
  // 遍历 wrappedGetters 属性
  forEachValue(wrappedGetters, (fn, key) => {
    // use computed to leverage its lazy-caching mechanism
    // 使用computed来利用其惰性缓存机制
    computed[key] = () => fn(store)
    // 重写 get 方法
    // store.getters.xx ===> store._vm[xx] 即 computed 中的属性
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true // for local getters
    })
  })

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  // 使用 vue 实例来存储状态树  让 state 变成响应式
  const silent = Vue.config.silent
  Vue.config.silent = true
   
// 当访问 store.state 时
// 其实是访问了 store._vm._data.$$state
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  Vue.config.silent = silent

  // enable strict mode for new vm
  // 确保只能通过 commit 的方式改变状态
  if (store.strict) {
    enableStrictMode(store)
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(() => {
        oldVm._data.$$state = null
      })
    }
    Vue.nextTick(() => oldVm.$destroy())
  }
}