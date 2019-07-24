'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.map(x => {
    if ((x % 5 === 0) && (x % 3 === 0)) {
      sayFive(x), sayThree(x)
    }
  })
  numbers.map(x => {
    if (x % 3 === 0) {
      sayThree(x)
    }
    else if (x % 5 === 0) {
      sayFive(x)
    }
  })

  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log("3", number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log("5", number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
