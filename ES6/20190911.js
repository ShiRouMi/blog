const handler = {
  get: function (target, prop) {
    invariant(prop, 'get')
    return target[prop]
  },
  set: function (target, prop, val) {
    invariant(prop, 'set')
    target[prop] = val
  }
}

function invariant(prop, action) {
  if(prop[0] === '_')
    throw new Error(`${action} 操作不被允许`)
}

let proxy = new Proxy({}, handler)

proxy._name = 1