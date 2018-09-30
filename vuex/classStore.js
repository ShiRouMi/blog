// src/store.js
export class Store {
  constructor (options = {}) {
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,  
    // this code should be placed here. See #731
    // 避免用户在某些情况下自动安装
    //  typeof window !== 'undefined' 在浏览器下 
    if (!Vue && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    // 如果不是在生产环境下， 就设定一个断言
    if (process.env.NODE_ENV !== 'production') {
      assert(Vue, `must call Vue.use(Vuex) before creating a store instance.`) // 在创建store实例前必须调用 Vue.use(Vuex)
      assert(typeof Promise !== 'undefined', `vuex requires a Promise polyfill in this browser.`) // 判断是否支持 promise
      assert(this instanceof Store, `store must be called with the new operator.`) // this 必须是Store的实例
    }

    // 解构 options
    const {
      plugins = [], // vuex的插件
      strict = false // 是否是严格模式
    } = options

    // store internal state 
    // store 内部的 state
    this._committing = false
    this._actions = Object.create(null)
    this._actionSubscribers = []
    this._mutations = Object.create(null)   
    this._wrappedGetters = Object.create(null)
    this._modules = new ModuleCollection(options)  
    this._modulesNamespaceMap = Object.create(null)
    this._subscribers = []
    this._watcherVM = new Vue()

    // bind commit and dispatch to self
    // call 将dispatch commit 的 this 绑定到 store 实例上  可以调用 store.dispatch 
    const store = this
    const { dispatch, commit } = this
    this.dispatch = function boundDispatch (type, payload) {
      return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload, options) {
      return commit.call(store, type, payload, options)
    }

    // strict mode
    this.strict = strict

    const state = this._modules.root.state

    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    // 递归注册所有模块
    installModule(this, state, [], this._modules.root)

    // initialize the store vm, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreVM(this, state)

    // apply plugins
    plugins.forEach(plugin => plugin(this))

    if (Vue.config.devtools) {
      devtoolPlugin(this)
    }
  }
}