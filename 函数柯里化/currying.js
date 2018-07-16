// 调用两次
function add(a) {
  return function (b) {
    return a + b
  }
}
console.log(add(5)(6))
// 调用三次
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
add(1)(2)(3)


function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
    var _adder = function () {
      [].push.apply(_args, [].slice.call(arguments));
      return _adder;
    };

    // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    }

    return _adder;
  }
  return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15