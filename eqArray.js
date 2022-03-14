const assertEqual = require('./assertEqual');

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




module.exports = eqArrays;
