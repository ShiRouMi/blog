// 使用vuex, 需要调用 Vue.use(Vuex)


// src/store.js
export function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue  // 避免重复安装
  applyMixin(Vue)
}


// src/mixin.js
export default function (Vue) {
  // 获取 vue版本号
  const version = Number(Vue.version.split('.')[0])
  
  // 2以上的版本 采用 mixin 将 vuexInit 合并到 beforeCreate 生命周期钩子
  // !!! 使得在组件中能够使用 this.$store 
  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit }) 
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    // 1.x 版本重写 _init 方法  将 vuexInit 合并到 _init
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    const options = this.$options
    // store injection
    // options.store 判断是否是根节点
    if (options.store) {
      // options.store()  or  直接赋值
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store
    } else if (options.parent && options.parent.$store) { // 如果有父节点，并且父节点有$store 
      this.$store = options.parent.$store // 父节点的$store 赋值给 this.$store
    }
  }  // 保证只有一个全局的 $store 变量
}
