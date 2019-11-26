/**
date: 2019-11-26
des:
合并排序数组
合并两个排序的整数数组 A 和 B 变成一个新的排序数组
给出A=[1,2,3,4]，B=[2,4,5,6]，返回 [1,2,2,3,4,4,5,6]
*/

function concatArray(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a-b)
}

console.log(concatArray([1,2,3,4], [2,4,5,6]))
