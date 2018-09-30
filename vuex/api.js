
// src/helpers.js
// commit 是如何实现状态的改变的?
commit (_type, _payload, _options) {
  // check object-style commit
  // 检查传入的参数
  const {
    type,
    payload,
    options
  } = unifyObjectStyle(_type, _payload, _options)

  const mutation = { type, payload }
  // 找到对应的mutations函数
  const entry = this._mutations[type]
  // 判断是否找到
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[vuex] unknown mutation type: ${type}`)
    }
    return
  }
  // _withCommit 函数将 _committing
  // 设置为 TRUE，保证在 strict 模式下
  // 只能 commit 改变状态
  this._withCommit(() => {
    entry.forEach(function commitIterator (handler) {
      handler(payload)
    })
  })
  // 执行订阅函数
  this._subscribers.forEach(sub => sub(mutation, this.state))

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      `[vuex] mutation type: ${type}. Silent option has been removed. ` +
      'Use the filter functionality in the vue-devtools'
    )
  }
}

// 如果需要异步改变状态，就需要通过 dispatch 的方式去实现。
// 在 dispatch 调用的 commit 函数都是重写过的，会找到模块内的 mutation 函数。

dispatch (_type, _payload) {
  // check object-style dispatch
  // 检查传入的参数
  const {
    type,
    payload
  } = unifyObjectStyle(_type, _payload)

  const action = { type, payload }
  // 找到对应的action函数
  const entry = this._actions[type]
  // 判断是否找到
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[vuex] unknown action type: ${type}`)
    }
    return
  }
  // 触发订阅函数
  this._actionSubscribers.forEach(sub => sub(action, this.state))
  // 在注册 action 的时候，会将函数返回值
  // 处理成 promise，当 promise 全部
  // resolve 后，就会执行 Promise.all
  // 里的函数
  return entry.length > 1
    ? Promise.all(entry.map(handler => handler(payload)))
    : entry[0](payload)
}

// 执行 mapState 就是执行 normalizeNamespace 返回的函数
/**
 * Normalize the map
 * 规范化 map 参数是数组呢还是对象呢，规范化后都是map对象
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * 
*/
export const mapState = normalizeNamespace((namespace, states) => {
  const res = {}
  // states 参数可以参入数组或者对象类型
  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = function mappedState () {
      let state = this.$store.state
      let getters = this.$store.getters
      if (namespace) {
        // 获得对应的模块
        const module = getModuleByNamespace(this.$store, 'mapState', namespace)
        if (!module) {
          return
        }
        state = module.context.state
        getters = module.context.getters
      }
      // 返回state
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  return res
})
// 根据参数设置 namespace
function normalizeNamespace (fn) {
  return (namespace, map) => {
    if (typeof namespace !== 'string') {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    return fn(namespace, map)
  }
}