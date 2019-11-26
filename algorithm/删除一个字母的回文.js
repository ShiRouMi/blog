/**
date: 2019-11-26
des:
给定非空字符串 s，您最多可以删除一个字符。判断是否可以成为回文。
该字符串仅包含小写字符 a-z,字符串的最大长度为 50000
Given s = "aba" return true
Given s = "abca" return true // delete c
           
*/

/**
如果仅仅是判断字符串是否是回文
那只要字符串倒转 看看是否相等即可
现在多了一个条件，可以删一个字符，来判断是否是回文
*/

/** 暂时没有思路。。。 */

/**
出现一处不同，将值传入一个新函数，如果还有不同，那返回 false ；如果没有不同了，那返回 true
*/
function validPalindrome(s) {
  let left = 0, right = s.length -1
  while(left < right) {
    if(s[left] !== s[right]) {
      return (
        subPalindrome(s, left+1, right) || subPalindrome(s, left, right-1)
      )
    }
    left++
    right--
  }
  return true
}
function subPalindrome(s, left, right) {
  while(left < right) {
    if(s[left] !== s[right]) {
      return false
    }
    left ++
    right --
  }
  return true
}

console.log(
  '回文验证:',
  validPalindrome('abaacaaa'),
  validPalindrome('ab'),
  validPalindrome('abc'),
  validPalindrome('aabsjdbaa')
);

/**
建议使用递归解法
*/