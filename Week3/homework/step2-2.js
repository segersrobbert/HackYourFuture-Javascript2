'use strict';

const threeFive = (startIndex, stopIndex, threeCallback, fiveCallback) => {
  const numbers = [];

  for(let i = startIndex; i <= stopIndex; i++ ){
    numbers.push(i);
    }
  for(let i = 0; i < numbers.length; i++ ){
    if(numbers[i] % 3 === 0){
       threeCallback(numbers[i]);
      }
      if(numbers[i] % 5 === 0){
        fiveCallback(numbers[i]);
      }
    }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
};

const sayThree = number => {
  console.log('sayThree: '+ number);
};

const sayFive = number => {
  console.log('sayFive: '+ number);
};
threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
