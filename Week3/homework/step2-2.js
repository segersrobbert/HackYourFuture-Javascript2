'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(n => {
    if (n % 3 === 0) {
      threeCallback(n);
    }
    if (n % 5 === 0) {
      fiveCallback(n);
    }
  });
  console.log(numbers);
}

function sayThree(number) {
  console.log('divisible by 3: ' + number);
}

function sayFive(number) {
  console.log('divisible by 5: ' + number);
}

threeFive(10, 15, sayThree, sayFive);
