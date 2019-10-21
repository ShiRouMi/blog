/* 节流：事件每 N 秒内执行一次
如何写这个条件？
*/

let count = 1
let oApp = document.getElementById('app')

function func(e) {
  oApp.innerHTML = count++ 
}

function throttle(fn, n) {
  let timer
  
  return function() {
    let context = this, args = arguments
    // 如果定时器存在，就不执行
    if(!timer) {
      timer = setTimeout(function() {
        timer = null
        fn.apply(context, args)
      }, n)
    }
  }
}

/*
时间戳
通过比较时间戳间隔是否大于指定的时间来决定是否执行回调
*/
function throttle2(fn, n) {
  let timer, previous = +Date.now()
  // 为什么是 return 一个函数呢？？？？
  // return 的这些函数都会执行吗？
  return function() {
    let context = this
    let args = arguments
    let now = +Date.now()
    
    if(now - previous >= n) {
      timer = setTimeout(function() {
        fn.apply(context, args)
        previous = now
      }, n)
    }
  }
}

// 16.67ms，通过 requestAnimationFrame
var throttle3 = function(fn, delayTime) {
  var flag;
  return function() {
    if(!flag) {
      requestAnimationFrame(function() {
        fn();
        flag = false;
      });
      flag = true;
    }
  }
}

oApp.onmousemove = throttle(func, 1000)
