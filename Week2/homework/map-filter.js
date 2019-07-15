'use strict';

function doubleOddNumbers(numbers) {
  numbers.filter(num => num%2 === 1);
  numbers.map(num => num*2);
  return numbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
