function shenkaobei(obj) {
  if(typeof obj === 'object') {
    console.error('object arguments need')
  }
  var newObj = obj instanceof Array ? [] : {}
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key] === 'object' ? shenkaobei(obj[key]) : obj[key]
    }
  }
  return newObj;
}
var myObj = {
  a: 1,
  b: {
    c: 2
  }
}

let newObj = shenkaobei(myObj)
console.log(newObj)