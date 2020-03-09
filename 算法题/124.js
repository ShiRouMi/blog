/**
 * @param {string} s
 * @return {string[][]}
 */
let partition = function(s) {
  let temp = []
  let result = []
  function isPalindrome(s,begin,end){
    while (begin < end) {
      if (s.charAt(begin++) !== s.charAt(end--))
        return false;
    }
    return true;
  }
  function copy (array) {
    let newArray = []
    for(let item of array) {
      newArray.push(item);
    }
    return  newArray;
  }
 
  function dfs(s,n) {
    if(n===s.length){
      result.push(copy(temp))
      return
    }
    for(let i = n;i<s.length;i++){
      if(isPalindrome(s,n,i)){
        let str = s.substr(n,i-n+1)
        temp.push(str)
        dfs(s,i+1)
        temp.pop()
      }
    }
  }
  if (s === "") {
    return result;
  }
  dfs(s, 0)
  return result;
};

console.log(partition('aab'))