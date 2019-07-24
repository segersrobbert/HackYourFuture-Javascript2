'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  let newArray = []
  console.log('The original array 2D is:');
  console.log(arr);
  console.log('%c The new flat array is:', 'color:red');
  arr.forEach(element => element.forEach(element => newArray.push(element)));
  return newArray
}

function flattenArray3d(arr) {
  let newArray = []
  console.log('The original arra 3D is:');
  console.log(arr);
  console.log('%c The new flat array is:', 'color:red');
  arr.forEach(element => element.forEach(element => element.forEach((element => newArray.push(element)))));
  return newArray
}
console.log('*********************************')
console.log('*******Exercise # 2.6 ***********')
console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log('*********************************')
// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
