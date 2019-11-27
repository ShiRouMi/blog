/**
date: 2019-11-27
des:
字符串密钥格式
给定字符串 S(非空)，字符串 S 仅由字母数字字符（a-z 和/或 A-Z 和/或 0-9）和短划线（ - ）组成。
给定正整数 K，我们希望重新格式化字符串，使得每个组包含正好的 K 个字符，但第一个组可能比 K 短，但仍必须包含至少一个字符。
必须在两个组之间插入短划线，并且所有小写字母都应转换为大写

Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"
5F3Z2E9W 5F3Z 2E9W
25G3J 2 5G 3J
*/

function secretCodeofStr(str, k) {
  let arr = str.split('').filter(item => item !== '-')
  length = arr.length
  
  let remainder = length % k, result = []
  
  if(remainder) {
    let firstStr = arr.splice(0, remainder)
    result.push(firstStr)
  }
  
  while(arr.length) {
    let current = arr.splice(0, k)
    result.push(current.join('').toUpperCase())
  }
  
  return result.join('-')
}

console.log(
  secretCodeofStr('5F3Z-2e-9-w', 4),
  secretCodeofStr('2-5g-3-J', 2)
);

/**
解析： 本题关键是 slice splice join split等的运用
*/