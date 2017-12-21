// // exports.a = 1

// export let a = 0

// // let b = 1

// setInterval(() => {
//   a++
//   /* eslint-disable */
//   c = 2
// }, 1000)

// export default c = 1

export default function c () {
  console.log('c')
}

setTimeout(() => {
  /* eslint-disable */
  c = 2
}, 1000)
