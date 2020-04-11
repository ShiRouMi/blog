/** 
 * @date 2020-2-6
*/

function arrayFlatten(arr) {
  return arr.flat()
}

function arrayFlatten2(arr) {
  return arr.reduce(
    (accum, current) =>
      accum.concat(
        Array.isArray(current) 
          ? arrayFlatten2(current) 
          : current
      ),
    []
  )
}

function arrayFlatten3(arr) {
  return arr.toString().split(',').map(item => Number(item))
}
let arr = [1,2,3,[4,5,6]]

console.log(arrayFlatten3(arr))