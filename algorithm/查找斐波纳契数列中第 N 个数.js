/**
date: 2019-11-26
des: 
查找斐波纳契数列中第 N 个数
所谓的斐波纳契数列是指：
前 2 个数是 0 和 1 。
第 i 个数是第 i-1 个数和第 i-2 个数的和。
斐波纳契数列的前 10 个数字是：0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
*/

function fibonacci(n) {
  if(n === 1) return 0
  if(n === 2) return 1
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10))

function fibonacci2(n) {
  let num = new Array(n).fill(0)
  num[1] = 1
  for(let i=2; i<=n-1; i++) {
    num[i] = num[i-1] + num[i-2]
  }
  return num[n-1]
}

console.log(fibonacci2(10))