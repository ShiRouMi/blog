/**
date: 2019-11-25
des: 
水仙花数的定义：
一个 N 位非负整数，其各位数字的 N 次方和等于该数本身。
栗子：

153 = 1^3 + 5^3 + 3^3

370 = 3^3 + 7^3 + 0^3

371 = 3^3 + 7^3 + 1^3

1634 = 14^4 + 64^4 + 34^4 + 44^4。

给出n，找到所有的n位十进制水仙花数。

#样例：
比如 n = 1, 所有水仙花数为：[0,1,2,3,4,5,6,7,8,9]。
而对于 n = 2, 则没有 2 位的水仙花数，返回 []。

*/

function shuixianhua(val) {
  let arr = (val + '').split('')
}

/**
思考：如何根据 n, 找到所有水仙花数
暂时没有思路
你说 要是给一个数，判断是否是水仙花数，这个还能有思路。
*/
function isSXH(val) {
  let arr = (val + '').split('')
  let len = arr.length
  let rr = arr.reduce((result, item) => result += Math.pow(item, len), 0)
  return rr === val
}
console.log(isSXH(153))

/**
思考：既然知道了判断一个数是否是水仙花数的方法
找到所有水仙花数的思路就是：
1. 确定范围
2. 返回内找到匹配值

1位数 10^1 = 10 0 ~ 9
2位数 10^2 = 100 10 ~ 99
3位数 10^3 = 1000 100 ~ 999
4位数 10^4 = 10000 1000 ~ 9999
(10^n-1, 10^n - 1)
*/
function findAllSXH(n) {
  let min = n>1 && Math.pow(10, n-1) || 0, max = Math.pow(10, n) - 1
  let result = []
  for(let i = min; i<= max; i++) {
    isSXH(i) && result.push(i)
  }
  return result
}
console.log(findAllSXH(3))