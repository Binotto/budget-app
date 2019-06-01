'use strict';

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _person.isAdult)(25)); // import './utils.js'
// import anythingIWant,{ square, add } from './utils.js';
// console.log('app.js is running ');
// console.log(square(7));
// console.log(add(7, 7));
// console.log(anythingIWant(700,7));


console.log((0, _person.canDrink)(25));
console.log((0, _person2.default)(65));
