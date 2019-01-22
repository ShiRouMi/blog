function Promise(){}
Promise.prototype.then() = function(){}
Promise.prototype.catch() = function(){}

Promise.resolve = function(){}
Promise.reject = function(){}
Promise.all = function(){}
Promise.race = function(){}


var p = new Promise(function(resolve) {
  console.log(1)
  setTimeout(function(){
    resolve(2)
  }, 1000)
})
p.then(function(val) {
  console.log(val)
})