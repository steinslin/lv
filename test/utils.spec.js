import { expect } from 'chai'
import { promisify, promisifyAll } from '../index.js'
import { describe, it } from 'mocha'

function read (name, cb) {
  setTimeout(() => {
    cb(null, name)
  }, 30)
}

function read2 (name, cb) {
  setTimeout(() => {
    cb(null, name)
  }, 30)
}

describe('utils', () => {
  it('promisify', async () => {
    const readAsync = promisify(read)
    const result = await readAsync('lin')
    expect(result).to.equal('lin')
  })
  it('promisifyAll', async () => {
    const obj = promisifyAll({ read, read2 })
    const result = await obj.readAsync('lin')
    const result2 = await obj.read2Async('rui')
    expect(result).to.equal('lin')
    expect(result2).to.equal('rui')
  })
})
