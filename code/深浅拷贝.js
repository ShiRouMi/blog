/** 
 * @date 2020-2-6
*/

function shallowCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

function deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key] instanceof Object 
        ? deepClone(obj[key])
        : obj[key]
    }
  }

  return newObj
}

let obj = {a: 1, b: 2}
console.log(shallowCopy(obj))

