'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var obj = require('./index.js')

// setInterval(() => {
//   obj.a++
// }, 1000)

setInterval(function () {
  console.log(_index.a, _index2.default);
  console.log(_fs.readFile);
}, 1000);
