/**
 * 
 * 解题思路
 * 比如字符串 aab , 先后判断 a a b;然后判断 aa b; 最后判断 aab 
 */
function divisionStr(str) {
  let result = []
  let temp = []
  
  function isHuiWen(ss) {
    let start = 0, end = ss.length-1
    while(start < end) {
      if(ss.charAt(start) !== ss.charAt(end)) {
        return false
      }
      ++start
      ++end
    }
    return true
  }

  function copy (array) {
    let newArray = []
    for(let item of array) {
      newArray.push(item);
    }
    return  newArray;
  }

  function dfs(s, n) {
    if(n === s.length) {
      result.push(copy(temp))
      return 
    }
    for(let i=n,l=s.length; i<l; ++i) {
      let val = s.substr(n, i-n+1)
      if(isHuiWen(val)) {
        temp.push(val)
        dfs(s, i+1)
        temp.pop()
      }
    }
  }

  if(str.length === 0) return result
  
  dfs(str, 0)
  return result
}
console.log(divisionStr('aab'))