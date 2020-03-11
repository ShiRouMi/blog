const _ = require('lodash')
var object = {
  a: {
    xx: 'hello',
    yy: 'world'
  },
  b: {
    mm: 'nice',
    nn: 'done'
  }
};
 
console.log(_.pick(object, ['a.xx'])) 
console.log(_.omit(object, ['a.xx']))
// => { 'b': '2' }