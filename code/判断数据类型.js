/** 
 * @date 2020-2-10
 */

function judgeLevel(obj) {
  let data = Object.prototype.toString.call(obj)
  let result = null
  switch(data) {
    case "[object Number]":
      result = 'number'
    case "[object Boolean]":
      result = 'boolean'
    case "[object Undefined]":
      result = 'undefined'
    case "[object String]":
      result = 'string'
    case "[object Array]":
      result = 'array'
    case "[object Object]":
      result = 'object'
    case "[object Function]":
      result = 'function'
    case "[object Symbol]":
      result = 'symbol'
  }
  return result
}