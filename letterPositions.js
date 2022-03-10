const assertArraysEqual = function(actual, expected) {
  let conditionsMet;
  if (conditionsMet === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }

}
const eqArrays = function (actual, expected) {
  let conditionsMet = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        conditionsMet = false;
      };
      
    }
  } else {
    conditionsMet = false;
  } 
  return conditionsMet;
}
const letterPositions = function(string) {
  const results = {};
  let i = 0;

  for (let char of string) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
    i++;
  }
  return results;
};