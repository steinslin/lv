/*
 * promise callback based & error first function
 * like: fs.readFile
 */

export function promisify (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('Argument to promisify must be a function')
  }
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (err, ..._args) => {
        err
          ? reject(err)
          : _args.length === 1
            ? resolve(..._args)
            : resolve(_args)
      })
    })
  }
}
