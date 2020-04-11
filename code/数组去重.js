/** 
 * @date 2020-2-6
*/
function disRepeat(arr) {
  return [...new Set(arr)]
}

function disRepeat3(arr) {
  return Array.from(new Set(arr))
}

function disRepeat2(arr) {
  return arr.filter((item, idx, arr) => arr.indexOf(item) === idx)
}

let arr = [1,2,3,4,5,4,3,2,1]
console.log(disRepeat3(arr))