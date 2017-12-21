var obj = require('./index.js')
require('./a.js')

setInterval(() => {
  console.log(obj.a)
}, 1000)
