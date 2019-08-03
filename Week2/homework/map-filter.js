'use strict';

function doubleOddNumbers(numbers) {
        const odds = numbers.filter(num => num%2 === 1);
        return odds.map(num => num*2 );
    }
  console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
