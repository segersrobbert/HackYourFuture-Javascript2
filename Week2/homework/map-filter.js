'use strict';

function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0 );// Replace this comment and the next line with your code
  const doubleOddNumbers = oddNumbers.map(oddNumbers => oddNumbers * 2 );
  
  console.log(doubleOddNumbers);// Replace this comment and the next line with your code

}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
