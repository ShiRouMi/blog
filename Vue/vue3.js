let data = {
  name: 'fe',
  hobby: ['sleep', 'eat'],
  info: {
    sex: 'girl',
    age: 25
  }
}

function Observe(data) {
  for(let key in data) {
    if(typeof data[key] === 'object') {
      Observe(data[key])
    }
    return defineProxy(data, key, data[key])
  }
}

function defineProxy(data) {
  return new Proxy(data, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  })
}

let observe = Observe(data)