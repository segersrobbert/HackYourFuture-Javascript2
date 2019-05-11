'use strict';

function doubleOddNumbers(numbers) {
    return numbers.filter(val => val %2 !== 0).map(val => val * 2);
    console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
