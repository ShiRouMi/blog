/**
 * 根据首次是否执行以及结束后是否执行
 * 用 leading 代表首次是否执行；trailing 代表结束后是否执行
 * 节流的实现，两种实现方式 一种使用「时间戳」 一种设置「定时器」
 * 节流是「每隔wait时间」就执行一次
 */

 // 第一版 使用 时间戳
 function throttle(func, wait) {
   var context, args;
   var previous = 0;

   return function() {
     var now = +new Date();
     context = this;
     args = arguments;
     if(now - previous > wait) {
       func.apply(context, args);
       previous = now;
     }
   }
 }

 // 第二版 设置定时器
 function throttle(func, wait) {
   var timeout, context, agrs;
   var previous = 0;

   return function() {
     context = this;
     args = arguments;
     if(!timeout) {
       timeout = setTimeout(function(){
         timeout = null;
         func.apply(context, agrs)
       }, wait)
     }
   }
 }
/*
比较两个方法：
第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件
*/

// 第三版 

function throttle(func, wait) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function() {
    previous = +new Date();
    timeout = null;
    func.apply(context, args)
  }

  var throttled = function() {
    var now = +new Date();
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if(remaining <=0 || remaining > wait) {
      if(timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args)
    } else if(!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }

  return throttled;
}

// 第四版
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : +new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = +new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}

// 第五版
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : +new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = +new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };

  throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = null;
  };

  return throttled;
}