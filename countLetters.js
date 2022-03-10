const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string){
  const letterCount = {};

  for(let char of string){
    if(char !== " "){
      if(letterCount[char]){
        letterCount[char] += 1;
      }else{
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
};

