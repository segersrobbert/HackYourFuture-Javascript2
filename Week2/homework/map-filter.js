'use strict';

function doubleOddNumbers(numbers) {
  return numbers.filter(numb => numb % 2 === 1).map(numb => numb * 2);
}

const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6, 10]

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
