  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  /**
   * undercore 防抖函数，返回函数连续调用时，空闲时间必须大于等于wait, func才会执行
   * @param {function} func              回调函数 
   * @param {*} wait                     时间间隔
   * @param {*} immediate                true时，立即调用函数
   * @return {function}                  返回客户端调用函数
   */
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      // 时间间隔
      var last = _.now() - timestamp;
      // 如果「时间间隔」少于「设定时间」并且大于0
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last); // 重新设置定时器
      } else {
        // 时间到了执行回调函数
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      // 时间戳
      timestamp = _.now();
      var callNow = immediate && !timeout;
      // 如果定时器不存在就创建一个
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        // 立即执行函数
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };