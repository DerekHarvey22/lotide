const eqArrays = require('./eqArray');

const assertArraysEqual = function(actual, expected) {
  let results;
  if (results === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }

}
module.exports = assertArraysEqual;

console.log(assertArraysEqual(["macbook", "laptops", "air"], ["hallelujah"]));
console.log(assertArraysEqual(["mlbtheshow"], ["hallelujah"]));

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

;

