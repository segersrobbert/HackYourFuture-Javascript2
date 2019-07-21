'use strict';

const myNumbers = [1, 2, 3, 4];

const filtered_numbers = myNumbers.filter(x => {
  return x % 2 !== 0;
});

const doubleOddNumbers = filtered_numbers.map(x => {
  return x * 2;
});

console.log(doubleOddNumbers); // ==> [2, 6]
