// var p = new Promise(function a(resolve){
//   console.log(1)
//   setTimeout(function(){
//     resolve(2)
//   }, 1000)
// })
// p.then(function b(val) {
//   console.log(val)
// })

function MyPromise (fn) {
  var _this = this

  this.callback = [] // 为什么设置成数组呢 -- 因为 then 可以有多个
  this.isResolved = false // 这个标志是记录是否调用过 resolve 函数 

  function resolve(val) {
    if(_this.isResolved) return; // 如果调用过 直接 return
    _this.isResolved = true  // 调用一次就设置为true
    
    if(_this.callback.length > 0) {
      _this.callback.forEach(function (func) {
        var res,
          cb = func.cb,
          resolve = func.resolve

          cb && (res = cb(val)) // res 是执行完回调后返回的值
          // 在取出原来保存的 cb 返回的值进行判断。
          // 如果该值是一个 MyPromise 对象，则调用它的 then，
          // 否则跟原来一样调用。
          if(typeof res === 'object' && res.then) {
            res.then(resolve)
          } else {
            resolve && resolve(res)
          }
      })
    }
  }

  fn(resolve)
}

MyPromise.prototype.then = function(cb) {
  var _this = this
  // 处理链式调用
  // 保存的是 then 的回调函数，和新 new 的 MyPromise 的 resolve 函数。
  return new MyPromise(function (resolve) {
    _this.callback.push({
      cb: cb,
      resolve: resolve
    })
  })
  // this.callback.push(cb)
}
// demo1:
// var p =  new MyPromise(function(resolve) {
//   console.log(1)
//   setTimeout(function(){
//     resolve(2)
//   }, 1000)
// })

// p.then(function(val) {
//   console.log(val)
// })

//demo2
// var p = new MyPromise(function(resolve) {
//   console.log(1)
//   setTimeout(function(){
//     resolve(2)
//   }, 1000)
// }) // 原生的 Promise 在调用了第一个 resolve 之后，后面的 resolve 都无效化
// p.then(function (val) {
//   console.log(val)
// })

// p.then(function(val) {
//   console.log(val)
// })

// 异步链式调用
// var p = new MyPromise(function(resolve) {
//   console.log(1)
//   setTimeout(function(){
//     resolve(2)
//   }, 1000)
// }) 
// p.then(function (val) {
//   console.log(val);
//   return new MyPromise(function (resolve) {
//     setTimeout(function () {
//       resolve(val + 1);
//     }, 1000);
//   });
// }).then(function (val) {
//   console.log(val);
// });

// 同步链式调用
// p.then(function (val) {
//   console.log(val);
//   return val + 1;
// }).then(function (val) {
//   console.log(val);
// });

new MyPromise(function (resolve) {
  resolve(1);
}).then(function (val) {
  console.log(val);
});

// constructor -> fn --同步--> resolve(reject) -> then -> then 回调
// constructor -> fn--异步-- > then -> resolve(reject) -> then 回调