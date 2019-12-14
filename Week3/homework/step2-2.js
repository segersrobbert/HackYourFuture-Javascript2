'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.map(x => {
    if (x % 5 === 0 && x % 3 === 0) {
      threeCallback(x); fiveCallback(x)
    }
    else if (x % 3 === 0) {
      threeCallback(x)
    }
    else if (x % 5 === 0) {
      fiveCallback(x)
    }
  })

  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + "is dividable by 3");
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + "is dividable by 5");
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
