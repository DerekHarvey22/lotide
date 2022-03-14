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
const without = function(source, itemsToRemove) {
  const sourceCopy = [...source];
 
  for (let i = 0; i < sourceCopy.length; i++) {
    
    for (let j = 0; j < itemsToRemove.length; j++) {
      
      if (sourceCopy[i] === itemsToRemove[j]) {
        
        sourceCopy.splice(i,1);
      }
    }
  }

  return sourceCopy;
};


console.log(without(["macbook", "laptops", "bootcamp"], ["website"]));

