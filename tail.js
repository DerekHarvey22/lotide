const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
 
module.exports = tail;
