const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  if (arr.length < 3 ) {
    return [];
  } else {
    const middleValue = [];
    if (arr.length % 2 === 0) {
      middleValue.push(arr[(arr.length / 2 -1)]);
      middleValue.push(arr[arr.length / 2]);
    } else {
      middleValue.push(arr[(Math.ceil(arr.length / 2) - 1)]);
    }
    return middleValue;
  }
};

module.exports = middle;



