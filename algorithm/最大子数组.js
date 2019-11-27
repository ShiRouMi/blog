/**
date: 2019-11-27
des: 最大子数组
给定一个整数数组，找到一个具有最大和的子数组，返回其最大和
给出数组[−2,2,−3,4,−1,2,1,−5,3]，符合要求的子数组为[4,−1,2,1]，其最大和为 6
*/

/*
解析： 保存两个值，一个为比较元素相加的值和当前值的大小 一个为最大值
*/

function findMax(arr) {
  let max = arr[0], newMax = arr[0]
  
  for(let i=1, len=arr.length; i<len; ++i) {
    newMax = Math.max(newMax + arr[i], arr[i])
    max = Math.max(newMax, max)
  }
  
  return max
}

console.log(findMax([-2,2,-3,4,-1,2,1,-5,3]))