/*
usage: const fn = throttle((a) => {
  console.log(a)
}, 100, 200)
fn('run')
 */

export function throttle (fn, delay, mustRunDelay) {
  let [timer, tStart] = [null, undefined]
  return function (...args) {
    const [context, tCurr] = [this, +new Date()]
    clearTimeout(timer)
    if (!tStart) {
      tStart = tCurr
    }
    if (typeof mustRunDelay === 'number' && tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}
