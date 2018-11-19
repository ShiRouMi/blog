const items = [false, null, 0, true, false]

const findTruthyBy = function(arr) {
  arr.forEach(function(item, index) {
    console.log(index)
    if(item) {
      console.log('index = ' + index)
      return true
    }
  })
  return false
}

console.log('Result: ' + findTruthyBy(items))