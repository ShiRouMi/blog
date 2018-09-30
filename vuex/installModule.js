// src/store.js

// vuex 在初始化的时候创建 module 树
installModule(this, state, [], this._modules.root)

function installModule (store, rootState, path, module, hot) {
  // 判断是否是 根 rootModule
  const isRoot = !path.length
  // 获取 namespace
  // root 没有namespace
  // 对于： modules: {a: moduleA,b: moduleB} namespace 为 "a/b/"
  const namespace = store._modules.getNamespace(path)

  // register in namespace map
  // 为 namespace 缓存 module
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module
  }

  // set state
  // 设置属性
  if (!isRoot && !hot) {
    const parentState = getNestedState(rootState, path.slice(0, -1))
    const moduleName = path[path.length - 1]
    store._withCommit(() => {
      Vue.set(parentState, moduleName, module.state)
    })
  }
  // 重写dispatch 和 commit
  const local = module.context = makeLocalContext(store, namespace, path)

  // 注册模块中的 mutation action getter
  module.forEachMutation((mutation, key) => {
    const namespacedType = namespace + key
    registerMutation(store, namespacedType, mutation, local)
  })

  module.forEachAction((action, key) => {
    const type = action.root ? key : namespace + key
    const handler = action.handler || action
    registerAction(store, type, handler, local)
  })

   
  // 这里会生成一个 _wrappedGetters 属性
  // 用于缓存 getter，便于下次使用
  module.forEachGetter((getter, key) => {
    const namespacedType = namespace + key
    registerGetter(store, namespacedType, getter, local)
  })

  // 递归安装模块
  module.forEachChild((child, key) => {
    installModule(store, rootState, path.concat(key), child, hot)
  })
}