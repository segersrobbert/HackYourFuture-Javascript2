'use strict';
const myNumbers = [1, 2, 3, 4];
const filteredNums = myNumbers.filter(num => num % 2 !== 0);
//console.log(filteredNums);

const doubleOddNumbers = filteredNums.map(num => num * 2)
console.log(doubleOddNumbers);

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};

