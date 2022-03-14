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



