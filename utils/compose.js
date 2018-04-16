// export function compose (f, g) {
//   return function (x) {
//     return f(g(x))
//   }
// }

export function compose (...fns) {
  return function (x) {
    return fns.reverse().reduce((result, fn) => {
      return fn(result)
    }, x)
  }
}
