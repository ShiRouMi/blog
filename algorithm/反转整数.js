/**
date: 2019-11-26
des:
反转整数
将一个整数中的数字进行颠倒，当颠倒后的整数溢出时，返回 0 (标记为 32 位整数)
*/

function reverse(num) {
  let reverseNum = +(num.toString().split('').reverse().join(''))
  let max = Math.pow(2, 31) - 1,
      min = Math.pow(-2, 31) + 1
      
  if(reverseNum > max || reverseNum < min) {
    return 0
  }
  return reverseNum
}
console.log(reverse(1534236469))

/**
这里要注意：
整数溢出的值为 Math.pow(2, 31) - 1 和 Math.pow(-2, 31) + 1，
转为数字：2147483647 和 -2147483647
*/