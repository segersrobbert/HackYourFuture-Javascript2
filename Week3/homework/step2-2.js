'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let index = startIndex; index <= stopIndex; index++) {
    numbers[index] = startIndex++;
  }

  for (let valueNum of numbers) {
    //console.log(valueNum);

    if (valueNum % 3 === 0) {
      threeCallback(valueNum);
    }
    if (valueNum % 5 === 0) {
      fiveCallback(valueNum);
    } else if (valueNum % 3 === 0 && valueNum / 5 === 0) {
      threeCallback(valueNum);
      fiveCallback(valueNum);
    }
  }

  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  console.log('this is inside sayThree');
  console.log(number);
}

function sayFive(number) {
  console.log('this is inside sayFive');
  console.log('sayFive' + number);
}

threeFive(10, 15, sayThree, sayFive);

// // Do not change or remove anything below this line
//module.exports = threeFive;
