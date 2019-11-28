/**
 * date: 2019-11-28
 * des: 中位数
 * 给定一个未排序的整数数组，找到其中位数。
 * 中位数是排序后数组的中间值，
 * 如果数组的个数是偶数个，则返回排序后数组的第 N/2 个数。
给出数组[4, 5, 1, 2, 3]， 返回 3
给出数组[7, 9, 4, 5]，返回 5
 */

function findTarget(arr) {
  let sortArr = arr.sort((a, b) => a-b)
  let index = Math.ceil(sortArr.length / 2)
  return sortArr[index-1]
}

console.log(findTarget([4, 5, 1, 2, 3]), findTarget([7, 9, 4, 5]))