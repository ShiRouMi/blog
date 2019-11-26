/**
date: 2019-11-26
des:
姓名去重
给一串名字，将他们去重之后返回。两个名字重复是说在忽略大小写的情况下是一样的。 
[
  'James',
  'james',
  'Bill Gates',
  'bill Gates',
  'Hello World',
  'HELLO WORLD',
  'Helloworld'
];
out: ['james', 'bill gates', 'hello world', 'helloworld'];
*/

function quchong(arr) {
  let data = arr.map(item => item.toLowerCase())
  
  return [...new Set(data)]
}

console.log(quchong([
  'James',
  'james',
  'Bill Gates',
  'bill Gates',
  'Hello World',
  'HELLO WORLD',
  'Helloworld'
]))