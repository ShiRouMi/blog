// 使用时间戳
function trobble (fn, n) {
  // 当前的时间戳 - 之前的时间戳
  var previous = 0,
    context,
    args
  return function() {
    context = this
    args = arguments
    var now = +new Date()
    if(now - previous > n) {
      fn.apply(context, args)
      previous = now
    }
  }
}

// 使用定时器

function trobble(fn, n) {
  var context, agrs, timer
  return function() {
    context = this
    args = arguments
    if(!timer) {
      timer = setTimeout(function() {
        timer = null // !!!
        fn.apply(context, args)
      }, n)
    }
  }
}