/**
 * debounce 防抖 
 * 触发事件，在事件触发n秒后执行；如果在一个事件执行前又触发了该事件，那么以新事件的时间为基准，n秒后执行
 * => 等触发完事件n秒内不再触发事件，才执行
 */

 // 第一版
 function debounce(func, wait) {
   var timeout;
   return function() {
     clearTimeout(timeout)
     timeout = setTimeout(func, wait)
   }
 }

 // 第二版  解决 func 中 「this指向」问题
 function debounce(func, wait) {
   var timeout;
   return function() {
     var context = this;
     clearTimeout(timeout)
     timeout = setTimeout(function() {
       func.apply(context)
     }, wait)
   }
 }

 // 第三版 解决 func 中 「event对象」问题
 function debounce(func, wait) {
   var timeout;

   return function() {
     var context = this;
     var args = arguments;
     
     clearTimeout(timeout);
     timeout = setTimeout(function(){
       func.apply(context, args)
     }, wait)
   }
 }

 // 第四版 加个immediate参数判断是否立即执行
 function debounce(func, wait, immediate) {
   var timeout;
   return function() {
     var context = this;
     var args = arguments;

     if(timeout) clearTimeout(timeout);
     if(immediate) {
       // 如果已经执行过， 不再执行
       var callNow = !timeout;

       // 这行代码什么意思呢？？？？！！！
       timeout = setTimeout(function(){
         timeout = null
       }, wait)

       if(callNow) func.apply(context, agrs)
     } else {
       timeout = setTimeout(function() {
         func.apply(context, args)
       }, wait)
     }
   }
 }

 // 第五版 返回值
 function debounce(func, wait, immediate) {
   var timeout, result;
   return function () {
     var context = this;
     var args = arguments;

     if(timeout) clearTimeout(timeout)
     if(immediate) {
       var callNow = !timeout;
       timeout = setTimeout(function() {
         timeout = null
       }, wait)
       if(callNow) result = func.apply(context, args)
     } else {
       timeout = setTimeout(function() {
         func.apply(context, args)
       }, wait)
     }
     return result;
   }
 }

 // 第六版  增加取消防抖按钮
 function debounce(func, wait, immediate) {
   var timeout, result;

   var debounced = function() {
     var context = this;
     var args = arguments;

     if(timeout) clearTimeout(timeout)
     if(immediate) {
       var callNow = !timeout;
       timeout = setTimeout(function(){
         timeout = null
       }, wait)
       if (callNow) result = func.apply(context, args)
     } else {
       timeout = setTimeout(function(){
         func.apply(context, args)
       }, wait)
     }
     return result;
   }

   debounced.cancel = function() {
     clearTimeout(timeout);
     timeout = null
   }

   return debounced;
 }