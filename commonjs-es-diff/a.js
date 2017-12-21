export let a = 1
exports.a = 1

setInterval(() => {
  a++
}, 1000)

// b.js
import { a } from './a.js'
setInterval(() => {
  console.log(a)
}, 1000)
// => 2 3 4 5 6

exports.a = 1

setInterval(() => {
  exports.a++
}, 1000)
