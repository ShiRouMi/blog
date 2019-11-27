/**
date: 2019-11-27
des: 比较字符串
比较两个字符串 A 和 B，确定 A 中是否包含 B 中所有的字符。字符串 A 和 B 中的字符都是 大写字母
给出 A = "ABCD" B = "ACD"，返回 true

给出 A = "ABCD" B = "AABC"， 返回 false
*/

function compare(str1, str2) {
  let [arr1, arr2] = [[...str1], [...str2]]
  for(let val of arr2) {
    let key = arr1.indexOf(val)
    
    if(key === -1) return false
    
    arr1.splice(key, 1)
  }
  return true
}
console.log(compare('ABCD', 'ACD'), compare('ABCD', 'AABC'));