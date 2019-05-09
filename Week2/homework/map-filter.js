'use strict';


function doubleOddNumbers(numbers) {
  return numbers.filter(n => n % 2).map(n => n * 2)
}

/* This would also work
function doubleOddNumbers(numbers) {
  return numbers.reduce((r, n) => n % 2 ? r.concat(n * 2) : r, [])
}
*/

const myNumbers = [1, 2, 3, 4];

console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
