function FunctionFe(name) {
  this.name = name
}

FunctionFe.prototype.work = function () {
  console.log('her job is moving bricks')
}

// 区别


class ES6Fe {
  constructor(name) {
    this.name = name
  }
  work() {
    console.log('her job is moving bricks')
  }
}


let girl = new FunctionFe('fe_eeeee')
console.log(girl)

let girl2 = new ES6Fe('fe_eeeee')
console.log(girl2)

Object.getOwnPropertyDescriptor(girl.__proto__, 'work')

Object.getOwnPropertyDescriptor(girl2.__proto__, 'work')