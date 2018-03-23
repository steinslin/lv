const {promisifyAll} = require('../lib/index.common.js')
const fs = promisifyAll(require('fs'))

console.log(fs.readFileAsync)
