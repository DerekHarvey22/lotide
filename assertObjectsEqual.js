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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (!object1[key] === object2[key]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`${inspect(object1)} === ${inspect(object2)}\nThese objects are equal \n`);
  } else {
    console.log(`${inspect(object1)} !== ${inspect(object2)}\nThese objects are not equal\n`);
  }
};