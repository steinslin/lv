const {promisify} = require('../lib/index.common.js')

function read (name, cb) {
  setTimeout(() => {
    cb(null, name)
  }, 1000)
}

const promisied = promisify(read)

promisied('lin rui').then(console.log)
