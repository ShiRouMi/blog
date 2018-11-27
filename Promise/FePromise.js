class FePromise {
  constructor(fn) {
    // this 代表实例对象

    this.callback = [] // 用来保存 then 传入的回调函数 then可能有多个
    let _this = this
    this.isResolved = false // Resolve只能调用一次

    let resolve = function(val) {
      if(_this.isResolved) return
      _this.isResolved = true

      _this.callback && _this.callback.forEach(func => {
        let res,
            cb = func.cb,
            resolve = func.resolve
        cb && (res = cb(val))
        if(typeof res === 'object' && res.then) {
          res.then(resolve)
        } else {
          resolve && resolve(res)
        }
      })
    }

    fn(resolve)
  }
  then(cb) {
    // this.callback.push(cb)
    let _this = this
    return new FePromise(function(resolve) {
      _this.callback.push({
        cb: cb,
        resolve: resolve
      })
    })
  }
}

var p = new FePromise(function (resolve) {
  console.log(1)
  setTimeout(function () {
    resolve(2)
  }, 1000)
})
p.then(function (val) {
  console.log(val)
  return new FePromise(function (resolve) {
    setTimeout(function () {
      resolve(val + 1)
    }, 1000)
  })
}).then(function(val) {
  console.log(val)
})