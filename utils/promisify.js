export function promisify (fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, ..._args) => {
        err ? reject(err, ..._args) : resolve(..._args)
      })
    })
  }
}
