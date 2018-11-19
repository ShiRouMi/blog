谈 `promise` 的时候，除了将他解决的痛点以及常用的 `API` 之外，
最好进行拓展把 `eventloop` 带进来好好讲一下，microtask、macrotask 的执行顺序，
如果看过 promise `源码`，最好可以谈一谈 原生 Promise 是如何实现的。
Promise 的关键点在于callback 的两个参数，一个是 `resovle`，一个是 `reject`。
还有就是 Promise 的`链式调用`（`Promise.then()`，每一个 then 都是一个责任人）。
