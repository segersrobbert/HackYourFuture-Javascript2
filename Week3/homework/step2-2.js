'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = []
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i)
  }
  console.log('Array: ' + numbers)
  numbers.forEach((num) => {
    if ((num % 3) === 0) {
      threeCallback(num)
    }
    if ((num % 5) === 0) {
      fiveCallback(num)
    }
  })
}
function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log('three: ' + number)
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log('five: ' + number)
}
console.log('*********************************')
console.log('*******Exercise # 2.2 ***********')
threeFive(10, 15, sayThree, sayFive)
console.log('*********************************')
// Do not change or remove anything below this line
module.exports = threeFive;
