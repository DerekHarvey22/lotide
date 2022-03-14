const eqArrays = function (actual, expected) {
  let results = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        results = false;
      };
      
    }
  } else {
    results = false;
  } 
  return results;
}
const assertArraysEqual = function(actual, expected) {
  let results;
  if (results === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }

} 
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
console.log (middle([1, 2, 3, 4, 5, 6]))
