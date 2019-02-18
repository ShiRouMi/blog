const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class FePromise {
  constructor(executor) {
    // this 代表实例对象
    this.state = PENDING; // 初始状态为 pending
    this.value = undefined; // 保存 回调的返回值

    this.onResolvedCallbacks = []; // 保存 resolve 的回调
    this.onRejectedCallbacks = []; //  保存 reject 的回调

    let resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn()); // 遍历执行每个回调
      }
    };

    let reject = error => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.value = error;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject); // 执行
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // this.callback.push(cb)
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v; // 如果不是 function  那么还要处理 【值穿透问题】
    onRejected =
      typeof onRejected === "function" ? onRejected : error => throw error;

    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2; // then 方法返回 promise 对象
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("circular reference"));
  }
  let called
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return 
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, error => {
          if (called) return
          called = true
          reject(error)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}