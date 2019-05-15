'use strict';

function threeCallback() {
  console.log('say three');
}
function fiveCallback() {
  console.log('say five');
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  numbers.forEach(num => {
    if (num % 3 === 0) {
      threeCallback();
    }
    if (num % 5 === 0) {
      fiveCallback();
    }
  });
}

threeFive(10, 15, threeCallback, fiveCallback);

// Do not change or remove anything below this line
module.exports = threeFive;
