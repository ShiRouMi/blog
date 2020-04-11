/**
 * 首次是否执行，结束是否执行
 */
// 时间戳 首次执行，结束不执行
function throttle(fn, n) {
  var previous=0, context

  const _throttle = function(...args) {
    context = this
    let now = new Date().getTime()
    if(now - previous >=n) {
      fn.apply(context, args)
      previous = now
    }
  }

  _throttle.cancel = function() {
    previous = 0
  }
  return _throttle
}

// 定时器 首次不执行，结束执行
function throttle2(fn, n) {
  var timer, context

  let _throttle = function(...args) {
    context = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(context, args)
      }, n)
    }
  }

  _throttle.cancel = function() {
    clearTimeout(timer)
    timer = null
  }

  return _throttle
}

function throttle3(func, n) {
  let timer, context, previous = 0

  let _throttle = function(...args) {
    let now = +new Date()
    //下次触发 func 剩余的时间
    let remain = n - (now - previous)
    context = this
    // 如果没有剩余的时间了或者你改了系统时间
    if(remain <=0 || remain > n) {
      if(timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      func.apply(context, args)
    } else if(!timer) {
      timer = setTimeout(() => {
        previous = +new Date()
        timer = null
        func.apply(context, args)
      }, remain)
    }
  }

  _throttle.cancel = function() {
    previous = 0
    clearTimeout(timer)
    timer = null
  }

  return _throttle
}

function throttle4(fn, n, options) {
  let timer, context, previous = 0
  if (!options) options = {}
  let _throttle = function(...args) {
    let now = +new Date()
    context = this
    if(!previous && options.leading === false) previous = now
    
    let remain = n - (now - previous)
    if(remain <=0 || remain > n) {
      if(timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(context, args)
      if(!timer) context = args = null
    } else if(!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : +new Date()
        timer = null
        fn.apply(context, args)
        if (!timer) context = args = null
      }, remain)
    }
  }

  _throttle.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return _throttle
}