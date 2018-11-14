function JuejinUser(username, password) {
  // TODO need implementation
  this.articles = 3 // 文章数量
  JuejinUser.prototype.readArticle = function () {
      console.log('Read article')
  }
}

// 类式继承(原型链继承)
function GithubUser(username, password) {
  let _password = password
  this.username = username
  GithubUser.prototype.login = function () {
    console.log(this.username + '要登录Github，密码是' + _password)
  }
}

function JuejinUser(username, password) {
  this.articles = 3
}

JuejinUser.prototype =  new GithubUser() 

JuejinUser.prototype.readArticle = function () {
  console.log('Read article')
}

var juejinUser1 = new JuejinUser('fefff', 'xxx', 4)

// 构造函数继承
function GithubUser(username, password) {
  let _password = password
  this.username = username
  GithubUser.prototype.login = function () {
    console.log(this.username + '要登录Github，密码是' + _password)
  }
}

function JuejinUser(username, password) {
  GithubUser.call(this, username, password)
  this.articles = 3
}

const juejinUser3 = new JuejinUser('fe', 'xx')
const juejinUser4 = new JuejinUser('ff', 'xx')
juejinUser3.__proto__.username = 'fyflying'


// 组合式继承
function GithubUser(username, password) {
  let _password = password 
  this.username = username 
  GithubUser.prototype.login = function () {
      console.log(this.username + '要登录Github，密码是' + _password)
  }
}

function JuejinUser(username, password) {
  GithubUser.call(this, username, password) // 第二次执行 GithubUser 的构造函数
  this.articles = 3 // 文章数量
}

JuejinUser.prototype = new GithubUser() // 第一次
const juejinUser1 = new JuejinUser('fe', 'xxx') // 

// 原型继承
function createObject(o) {
  // 创建临时类
  function f() {}
  f.prototype = o
  return new f()
}
JuejinUser.prototype = createObject(GithubUser) // 类式继承没解决的依旧没解决

// 寄生式继承
function createObj(o) {
  var clone = Object.create(o)
  clone.say = function() {
    console.log('hello')
  }
  return clone
}// 依托一个对象而生的继承方式

// 寄生组合式继承

function inherit(child, parent) {
  const p = Object.create(parent.prototype) // 继承父类的原型
  // child.prototype = p // 重写子类的原型
  child.prototype = Object.assign(p, child.prototype) // 将父类原型和子类原型合并，并赋值给子类的原型
  p.constructor = child // 重写「被污染的」子类的constructor
}

// 父类
function GithubUser(username, password) {
  let _password = password
  this.username = username
}
GithubUser.prototype.login = function() {
  console.log(this.username + '要登录Github，密码是' + _password)
}

// 子类
function JuejinUser(username, password) {
  GithubUser.call(this, username, password)
  this.articles = 3
}

// 调用
inherit(JuejinUser, GithubUser)

// 在原型上添加方法
JuejinUser.prototype.readArticle = function() {
  console.log('read article')
}

const juejinUser11 = new JuejinUser('fe', 'xx')
console.log(juejinUser11)