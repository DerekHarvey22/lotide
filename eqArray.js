const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
  

};

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






assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // should pass