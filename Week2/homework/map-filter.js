'use strict';

function doubleOddNumbers(numbers) {
  let oddNUmbers = numbers.filter((elem) => {
    return (elem % 2 !== 0);
  })
  let doubleNumber = oddNUmbers.map((elem) => {
    return elem * 2;
  })
  return doubleNumber;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));// [2, 6]
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};

