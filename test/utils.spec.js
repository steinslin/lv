import { expect } from 'chai'
import * as util from '../index.js'
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

function noopSync () {
}

const DELAY = 30

describe('utils', () => {
  it('promisify', async () => {
    const [ readAsync, read3Async ] = [ util.promisify(read), util.promisify(read3) ]
    const result = await readAsync('lin')
    const result2 = await read3Async('lin', 'rui')
    expect(result).to.equal('lin')
    expect(result2).to.deep.equal(['lin', 'rui'])
  })

  it('promisifyAll', async () => {
    const obj = util.promisifyAll({ read, read2, noopSync })
    const result = await obj.readAsync('lin')
    const result2 = await obj.read2Async('rui')
    expect(result).to.equal('lin')
    expect(result2).to.equal('rui')
    expect(obj.noopSyncAsync).to.equal(undefined)
  })

  it('camelToUnderline', () => {
    expect(util.camelToUnderline('LinRui')).to.equal('lin_rui')
    expect(util.camelToUnderline('linRui')).to.equal('lin_rui')
    expect(util.camelToUnderline('linrui')).to.equal('linrui')
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
    expect(util.deepClone(obj)).to.deep.equal({ ...obj })
    expect(util.deepClone(obj)).to.not.equal(obj)
  })

  it('sleep', async () => {
    const t = +new Date()
    await util.sleep(DELAY)
    expect((+new Date() - t) >= DELAY).to.equal(true)
  })

  it('flatten', async () => {
    const arr = [1, [2, 3, [4, 5, [6], 7]], 8, [9]]
    expect(util.flatten(arr)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('chunk', () => {
    expect(util.chunk([1, 2, 3, 4], 2)).to.deep.equal([[1, 2], [3, 4]])
    expect(util.chunk([1, 2, 3], 2)).to.deep.equal([[1, 2], [3]])
  })

  it('countOccurrences', () => {
    expect(util.countOccurrences([1, 2, 3, 4, 5, 5], 5)).to.equal(2)
    expect(util.countOccurrences([1, 2, 3, 4, 5], 0)).to.equal(0)
  })

  it('curry', () => {
    const fn = function (a, b, c) {
      return a + b + c
    }
    const curried = util.curry(fn)
    const curried2 = util.curry(fn, 3, 1, 2)
    expect(curried).to.be.an.instanceof(Function)
    expect(curried(1, 2)).to.be.an.instanceof(Function)
    expect(curried(1, 2, 3)).to.equal(6)
    expect(curried2).to.be.an.instanceof(Function)
    expect(curried2(3)).to.equal(6)
  })

  it('eventEmitter', done => {
    const event = new util.Event()
    let test = 0
    event.on('test', r => {
      test = r
    })
    let once = 0
    event.once('once', r => {
      once += r
    })
    setTimeout(() => {
      event.fire('test', 1)
      event.fire('once', 1)
      event.fire('once', 1)
      expect(test).to.equal(1)
      expect(once).to.equal(1)
      event.remove('test')
      event.fire('test', 2)
      expect(test).to.equal(1)
      done()
    }, DELAY)
  })

  it('underlineToCamel', () => {
    const t1 = 'lin_rui'
    const t2 = 'lin_rui_test'
    const t3 = '_lin_rui_'
    expect(util.underlineToCamel(t1)).to.equal('linRui')
    expect(util.underlineToCamel(t2)).to.equal('linRuiTest')
    expect(util.underlineToCamel(t3)).to.equal('LinRui_')
  })
})
