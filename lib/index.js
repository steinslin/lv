'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = c;
// // exports.a = 1

// export let a = 0

// // let b = 1

// setInterval(() => {
//   a++
//   /* eslint-disable */
//   c = 2
// }, 1000)

// export default c = 1

function c() {
  console.log('c');
}

setTimeout(function () {
  /* eslint-disable */
  exports.default = c = 2;
}, 1000);
