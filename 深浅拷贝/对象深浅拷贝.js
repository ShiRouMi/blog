var obj = {
  age: 20
}
var newObj = obj
newObj.age = 25
console.log(obj);
console.log(newObj);
/*
{age: 25}
{age: 25}
*/

// 浅拷贝方式一

var obj = {
  age: 20
}
var newObj = Object.assign({}, obj);
newObj.age = 25
console.log(obj);
console.log(newObj);
/*
{age: 20}
{age: 25}
*/

// 浅拷贝方式二
var obj = {
  age: 20
}
var newObj = {...obj}
newObj.age = 25
console.log(obj);
console.log(newObj);
/*
{age: 20}
{age: 25}
*/

// 浅拷贝只能解决第一层的问题，如果对象的值中还有对象的话，

let a = {
  age: 1,
  jobs: {
      first: 'FE'
  }
}
let b = {...a}
a.jobs.first = 'native'
console.log(b.jobs.first) // native

// 就需要深拷贝解决以上问题