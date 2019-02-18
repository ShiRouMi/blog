// function qiankaobei(obj) {
//   if(typeof obj !== "object") {
//     console.error('obj 的类型需要是对象')
//   }
//   let value = obj instanceof Array ? [] : {}
//   for(let key in obj) {
//     if(obj.hasOwnProperty(key)) {
//     value[key] = obj[key]
//     }

//   }
//   return value 
// }

function shenkaobei(obj) {
  if (typeof obj !== "object") {
    console.error('obj 的类型需要是对象')
  }
  let value = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      value[key] = obj[key] instanceof Object ? shenkaobei(obj[key]) : obj[key]
    }

  }
  return value
}

var myObj = {
  a: 1,
  b: {
    c: 2
  }
}

// let newObj = qiankaobei(myObj)
// newObj.a = 11
// newObj.b.c = 22
// console.log(myObj.a)
// console.log(myObj.b.c)

let shenObj = shenkaobei(myObj)

shenObj.a = 11
shenObj.b.c = 22
console.log(myObj.a)
console.log(myObj.b.c)