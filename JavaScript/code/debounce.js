/*
防抖，当事件多次触发时，触发事件 N 秒后执行。
如果 N 秒内事件再次触发，那么以新的事件时间点为开始时间，重新计时 N 秒
*/

/*
参数是什么？
返回值是什么？
如果 N 秒内事件再次触发，这个条件怎么写
*/
let count = 1
let oApp = document.getElementById('app')

function func(e) {
  console.log(this)
  console.log(e)
  oApp.innerHTML = count++ 
}

function debounce(fn, n) {
  let timer
  /* 
    通过闭包的方式，维护变量 timer
    每次执行该函数的时候会结束之前的延迟操作，
    重新执行setTimeout方法
    实现了多次触发事件，只执行一次
  */
  return function() {
    let context = this, args = arguments
    timer && clearTimeout(timer)
  
    timer = setTimeout(function () {
      func.apply(context, args)
    }, n)
  }
}

oApp.onmousemove = debounce(func, 1000)
