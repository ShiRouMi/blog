# 类数组对象与arguments
## 类数组对象
拥有一个 length 属性和若干索引属性的对象
```js
var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
```
类数组对象不能使用数组方法
### 类数组对象转数组

```js
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// 1. slice
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"] 
// 4. apply
Array.prototype.concat.apply([], arrayLike)
```

## Arguments对象
Arguments 对象只「定义在函数体」中，包括了函数的参数和其他属性。

```js
function foo(name, age, sex) {
    console.log(arguments);
}

foo('name', 'age', 'sex')
```
![arguments2](media/15342561303373/arguments2.jpg)

