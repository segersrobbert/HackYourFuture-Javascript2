'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  //Generate an array containing values from start value to end value (inclusive):
  while (startIndex <= stopIndex) {
    numbers.push(startIndex++);
  }

  //Take the newly created array and iterate over it,
  //and calling the first callback if the array value is divisible by 3:
  //The function should call the second callback if the array value is divisible by 5:

  numbers.filter(function(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      sayThree(number);
      console.log('...and...');
      sayFive(number);
    } else if (number % 3 === 0) {
      sayThree(number);
    } else if (number % 5 === 0) {
      sayFive(number);
    }
  });

  console.log('Our array is ' + numbers);
}

function sayThree(number) {
  console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
