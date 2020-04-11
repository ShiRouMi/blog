let data = {
  name: 'fe',
  hobby: ['sleep', 'eat'],
  info: {
    sex: 'girl',
    age: 25
  }
}

function Obserbe(data) {
  for(let key in data) {
    if(typeof data[key] === 'object') {
      Obserbe(data[key])
    }
    defineReactive(data, key, data[key])
  }
}

function defineReactive(data, key, val) {
  return Object.defineProperty(data, key, {
    get() {
      return val
    },
    set(newVal) {
      console.log('更新啦---')
      val = newVal
    }
  })
}

Obserbe(data)