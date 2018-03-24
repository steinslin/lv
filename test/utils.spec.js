import { expect } from 'chai'
import { promisify, promisifyAll, camelToUnderline, deepClone, sleep, flatten } from '../index.js'
import { describe, it } from 'mocha'

function read (name, cb) {
  setTimeout(() => {
    cb(null, name)
  }, DELAY)
}

function read2 (name, cb) {
  setTimeout(() => {
    cb(null, name)
  }, DELAY)
}

function read3 (name, key, cb) {
  setTimeout(() => {
    cb(null, name, key)
  })
}

const DELAY = 30

describe('utils', () => {
  it('promisify', async () => {
    const [ readAsync, read3Async ] = [ promisify(read), promisify(read3) ]
    const result = await readAsync('lin')
    const result2 = await read3Async('lin', 'rui')
    expect(result).to.equal('lin')
    expect(result2).to.deep.equal(['lin', 'rui'])
  })
  it('promisifyAll', async () => {
    const obj = promisifyAll({ read, read2 })
    const result = await obj.readAsync('lin')
    const result2 = await obj.read2Async('rui')
    expect(result).to.equal('lin')
    expect(result2).to.equal('rui')
  })
  it('camelToUnderline', () => {
    expect(camelToUnderline('LinRui')).to.equal('lin_rui')
    expect(camelToUnderline('linRui')).to.equal('lin_rui')
    expect(camelToUnderline('linrui')).to.equal('linrui')
  })
  it('deepClone', () => {
    const obj = {
      a: 1,
      b: {
        c: [1, 2, 3],
        d: {
          d: [1, 2, 3],
          e: false
        }
      }
    }
    expect(deepClone(obj)).to.deep.equal({ ...obj })
    expect(deepClone(obj)).to.not.equal(obj)
  })
  it('sleep', async () => {
    const t = +new Date()
    await sleep(DELAY)
    expect((+new Date() - t) >= DELAY).to.equal(true)
  })
  it('flatten', async () => {
    const arr = [1, [2, 3, [4, 5, [6], 7]], 8, [9]]
    expect(flatten(arr)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
