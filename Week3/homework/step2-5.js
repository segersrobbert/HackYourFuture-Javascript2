'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log('*********************************')
console.log('*******Exercise # 2.5 ***********')
const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log('The result is: ' + result); // 720
console.log('*********************************')
// Do not change or remove anything below this line
module.exports = multiplyAll;
