import { expect } from 'chai'
import { promisify, promisifyAll, camelToUnderline, deepClone, sleep } from '../index.js'
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

const DELAY = 30

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
})
