/**
date: 2019-11-25
des:
反转一个只有 3 位数的整数
123 反转之后是 321。 900 反转之后是 9
*/

function reverse(num) {
  let arr = num.toString().split('')
  return +arr.reverse().join('')
}
console.log(reverse(900))

/**
解析：上面那种是最简单的实现方式
先转成数组，然后依赖 reverse 方法反转，最后转成数字
-------------
另外一种方法，因为限定在是 3位数整数
那么可以对数字取余，百位数变成个位，十位数还是十位，个位数变成百位
123 => 1*10^0 + 2*10^1 + 3* 10^2 = 321
*/

function reverse2(num) {
  let result = parseInt(num / 100) + parseInt((num % 100) / 10) * 10 + (num%10) * 100
  return result
}
console.log(reverse2(123))

/**
不过对数字取余这个，是建立在限定3位数整数的基础上
局限性很大
另外还有拼接字符串的方式，也是局限性很大
*/

function reverse3(num) {
  let str = num.toString()
  return +(str.charAt(2) + str.charAt(1) + str.charAt(0))
}

console.log(reverse3(123))