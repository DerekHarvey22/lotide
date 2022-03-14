const assertArraysEqual = function(actual, expected) {
  let results;
  if (results === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }

}
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

const takeUntil = function(array, callback) {
  const elements = [];
  for (const element of array) {
    if(callback(element)) {
      return elements;
    } else {22
      elements.push(element);
    }
  }
  return elements;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

