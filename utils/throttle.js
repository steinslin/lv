/*
usage: const fn = throttle((a) => {
  console.log(a)
}, 100, 200)
fn('run')
 */

export function throttle (fn, delay, mustRunDelay) {
  let [timet, tStart] = [null, undefined]
  return function (...args) {
    const [context, tCurr] = [this, +new Date()]
    if (!tStart) {
      tStart = tCurr
    }
    if (tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}
