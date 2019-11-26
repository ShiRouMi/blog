/**
 * date: 2019-11-25
 * des: 找出数组重复次数最多的元素
 * 给定一个字符串数组, 每一个元素代表一个 IP 地址，找到出现频率最高的 IP。
 * 注：给定数据只有一个频率最高的 IP
lines = ['192.168.1.1', '192.118.2.1', '192.168.1.1'];
return '192.168.1.1';
 */

// 数组的方法有以下一些
// forEach map find concat filter includes
// indexof join reduce some splice ...

function findMost(arr) {
  let map = new Map()
  arr.forEach(item => {
    if(map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  let maxKey = Math.max(...map.values()), data = ''
  map.forEach((val, key) => {
    if(val == maxKey) {
      data = key
    }
  })
  return data
}

let val = findMost(['192.168.1.1', '192.118.2.1', '192.168.1.1'])
console.log('val = ' + val)

/*
解题思路分析：
找到数组中重复次数最多的元素，需要计算数组中每个元素的个数
使用 map 记录值与次数
然后找到 map 中次数最多，进而读取值
这种实现方式一般般吧
*/

/**
优化方式：其实不需要遍历两回，遍历第一回的时候就可以做记录了
*/
function findMost2(arr) {
  let map = new Map(), max = 1, val = ''
  arr.forEach(item => {
    if(map.has(item)) {
      map.set(item, map.get(item) + 1)
      
      if ((map.get(item) + 1) > max) {
        max = map.get(item) + 1
        val = item
      }
      
    } else {
      map.set(item, 1)
    }
  })
  return val
}

let val2 = findMost2(['192.168.1.1', '192.118.2.1', '192.168.1.1'])
console.log('val2 = ' + val2)

/**
其实根本不用使用到 map，普通的对象就好了
*/

function findMost3(arr) {
  let [obj, max, val] = [{}, 1, '']
  arr.forEach(item => {
    if(obj[item]) {
      let value = obj[item] + 1
      obj[item] = value
      if(value > max) {
        max = value
        val = item
      }
    } else {
      obj[item] = 1
    }
  })
  return val
}

let val3 = findMost3(['192.168.1.1', '192.118.2.1', '192.168.1.1'])
console.log('val3 = ' + val3)