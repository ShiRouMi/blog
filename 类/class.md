# Class 

## 构造函数和类
```js
// es5方式 定义构造函数
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};
var p = new Point(1, 2);

<!------------!>

// es6方式 定义类
class Point {
// 有一个constructor方法，这就是构造方法
// 而this关键字则代表实例对象。
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1,2)
// typeof Point ---> 'function'
```

## Class

> 好学生划重点啦啦啦啦

- 生成实例对象的方式是使用「构造函数」
- 类的所有方法都定义在类的`prototype`属性上
- 在类的实例上调用方法，就是在调用原型上的方法；给类添加新方法，可以添加在`prototype`上
- 类内定义的方法，都是**不可枚举**的；与ES5不一致    **区别**
- 类的属性名，可以采用**表达式**。
- 类和模块的内部，默认就是严格模式
- `constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。
- 类必须要用 `new` 调用，否则会报错。普通构造函数不用 `new` 也可以   **区别**
- 实例的属性除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上）
- 类的所有实例共享一个原型对象。
- Class 表达式
- Class 不存在变量提升       **区别**
- ES6 Class 不提供私有方法， 在「命名上」加以区别  解决：将私有方法移出模块 | 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值 | 提案 （#)
- 类的方法内部如果含有this，**它默认指向类的实例**。谨慎使用。
- 在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
- Class的静态方法 某方法前加上`static`，表示该方法**不会被实例继承**，可以使用类调用，不能被实例调用
- 静态方法里有`this`, **指得是类，不是实例**
- 类里静态方法可以和非静态方法重名
- 父类的静态方法，可以**被子类继承**

## 类声明和函数声明的区别
- 1.函数声明可以被提升，类声明不能提升。
- 2.类申明默认在严格模式下
- 3.类中所有方法都是不可枚举的
- 4.只能使用new来调用类

## 类的表现形式

```js
// 申明式
Class MyClass {}

// 命名表达式 这个类的名字是MyClass而不是Me
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};

// 匿名表达式
const MyClass = class { /* ... */ };
```
