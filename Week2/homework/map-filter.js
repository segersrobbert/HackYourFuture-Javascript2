'use strict';

function doubleOddNumbers(numbers) {
    const doubleOddArr = numbers.filter(num => num % 2)
        .map(num => num * 2)
    return doubleOddArr;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
