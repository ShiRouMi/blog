/**
date: 2019-11-21
des: 两数之和
给一个整数数组，找到两个数使得他们的和等于一个给定的数 target。

你需要实现的函数 twoSum 需要返回这两个数的下标, 并且第一个下标小于第二个下标。注意这里下标的范围是 0 到 n-1。

给出 numbers = [2, 7, 11, 15], target = 9, 返回 [0, 1].
给出 numbers = [2, 33, 11, 2], target = 4, 返回 [0, 3].
*/

function twoSum(arr, target) {
  for(let i=0, len=arr.length; i<len; ++i) {
    let offset = target - arr[i]
    let right = arr.indexOf(offset, i+1)
    if(right !== -1) {
      return [i, right]
    }
  }
  return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9), twoSum([2, 33, 11, 2], 4));