const PENDING = Symbol('pending')
const REJECTED = Symbol('rejected')
const RESOLVED = Symbol('resolved')

class Promise {
  constructor(actuator) {
    this.state = PENDING
    this.value = undefined
    this.error = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = value => {
      if(this.state = PENDING) {
        this.state = RESOLVED
        this.value = value
        this.onResolvedCallbacks.forEach(func => func())
      }
    }
    let reject = error => {
      if(this.state = PENDING) {
        this.state = REJECTED
        this.error = error
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      actuator(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error}
  
    let promise2 = new Promise((resolve, reject) => {
      if(this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          try {
            let x = onFullfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.error)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if(this.state === REJECTED) {
        try {
          let x = onRejected(this.error)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      }
      if(this.state === RESOLVED) {
        try {
          let x = onFullfilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      }
    })

    return promise2
  }

}

function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return reject(new TypeError('circular reference'));
  }

  let called
  if(x !== null && (typeof x === 'function' || typeof x === 'object')) {
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, y => {
          if(called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, e => {
          if(called) return
          called = true
          reject(e)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if(called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

module.exports = Promise