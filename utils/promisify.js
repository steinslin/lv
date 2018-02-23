export function promisify (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Argument to promisify must be a function')
  }
  if (fn.then) {
    return fn
  }
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, ..._args) => {
        err ? reject(err, ..._args) : resolve(..._args)
      })
    })
  }
}
