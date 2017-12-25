// var obj = require('./index.js')

// setInterval(() => {
//   obj.a++
// }, 1000)

import b, { a } from './index.js'
import { readFile } from 'fs'

setInterval(() => {
  console.log(a, b)
  console.log(readFile)
}, 1000)
