class GithubUser {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  login() {
    console.log(this.username + '要登录Github，密码是' + this.password)
  }

  static getPublicServices() {
    return ['login']
  }
}

// ------------------------------------

function GithubUser(username, password) {
  let _password = password
  this.username = username
  GithubUser.prototype.login = function () {
    console.log(this.username + '要登录Github，密码是' + _password)
  } // 我们一般都会把共有方法放在类的原型上，而不会采用this.login = function() {}这种写法。
  // 因为只有这样，才能让多个实例引用同一个共有方法，从而避免重复创建方法的浪费。
}
// 静态方法
GithubUser.getPublicServices = function () {
  return ['login']
}