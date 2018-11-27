class FePromise {
  constructor(fn) {
    // this 代表实例对象
    this.callback = undefined // 用来保存 then 传入的回调函数
    let _this = this
    // resolve reject all race FePromise的方法
    let resolve = function(val) {
      _this.callback && _this.callback(val)
    }
    fn(resolve)
  }
  then(cb) {
    this.callback = cb
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
})