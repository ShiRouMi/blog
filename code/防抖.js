// function exec() {
//   console.log('hello world')
// }
// debounce(exec, 1000)

function debounce(fn, n) {
  var timer, context
  const _debounce = function(...args) {
    context = this
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, n)
  }
  _debounce.cancel = function() {
    clearTimeout(timer)
    timer = null
  }
  return _debounce
}