// 防抖的概念是：持续触发事件，n秒内没再触发，执行事件
// 考察知识点 定时器 setTimeout  &  闭包
function _debounce(fn, n) {
  var timer
  return function () {
    clearTimeout(timer)
    timeout = setTimeout(fn, n)
  }

}

// 思路: 咱先想想是怎么调用的
_debounce(function() {
  axios.post('')
}, 1000)

// 问题在于，如何代表  n秒内不再触发
// 注意： 传入一个函数，返回也是一个函数

// 注意： this 的指向问题
// 注意： event 对象