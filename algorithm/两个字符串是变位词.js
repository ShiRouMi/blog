/**
 * date: 2019-11-30
 * des: 两个字符串是变位词
 * 写出一个函数 anagram(s, t) 
 * 判断两个字符串是否可以通过改变字母的顺序变成一样的字符串。
给出 s = "abcd"，t="dcab"，返回 true. 
给出 s = "aacd", t = "acdd", 返回 false. 
给出 s = "abcd", t = "dcaba", 返回 false. 
给出 s = "abcd", t = "abce", 返回 false
 */
function anagram(s, t) {
  let [sArr, tArr] = [[...s], [...t]]
  for(let i=0,l=sArr.length; i<l; ++i) {
    if(tArr.indexOf(sArr[i])) tArr.splice(tArr.indexOf(sArr[i], 1))
    else return false
  }
  return true
}

console.log(anagram('abcd', 'aaccdd'))