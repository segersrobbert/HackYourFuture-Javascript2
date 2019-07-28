'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for(let i = startIndex; i<stopIndex+1; i++){
    numbers.push(i);
  }
  
  numbers.map(item => { if(item%3===0){threeCallback(item)} if(item%5===0){fiveCallback(item)}})
  
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log("Three");
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log("Five");
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
