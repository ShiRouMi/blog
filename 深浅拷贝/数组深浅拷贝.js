// 数组浅拷贝举例
// demo1
var arr = [1,2,'1', true, null, undefined];
var newArr = arr.concat();
newArr[0] = 'hello';
console.log(newArr);
console.log(arr)
/*
["hello", 2, "1", true, null, undefined]
[1, 2, "1", true, null, undefined]
*/

// demo2
var arr = [{a: 1}, [1,2], [3]]
var newArr = arr.concat();
newArr[0].a = 2;
newArr[1] = [3,4];
newArr[2][0] = 5;
console.log(newArr);
console.log(arr);

/*
[{a: 2}, [3,4], [5]]
[{a: 2}, [1,2], [5]]
*/
// 如果数组元素是基本类型，就会拷贝一份，互不影响，
// 而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。
// 我们把这种复制引用的拷贝方法称之为浅拷贝 浅拷贝只拷贝一层

// -----------------------------

// 数组深拷贝 
// 深拷贝是指完全的拷贝了一个对象，两者互相分离，互不影响。修改了其中一个对象的属性，不会影响另外一个对象。

// 深拷贝demo

var arr = [1, {a: 1}, 'hello', ['nice', 'day']]

var newArr = JSON.parse(JSON.stringify(arr))

// JSON.parse(JSON.stringify()) 存在的问题 
/*
- 会忽略 undefined
- 不能序列号函数
- 不能解决循环引用的对象
*/

