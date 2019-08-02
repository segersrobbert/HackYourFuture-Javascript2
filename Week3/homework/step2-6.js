'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  arr = [].concat(...arr);
  console.log(arr);
}

function flattenArray3d(arr) {
  //the 1st concatenation reduce 3 dimensional to 2 dimensional
  arr = [].concat(...arr);
  //the 2nd concatenation reduce to 1 dimensional
  arr = [].concat(...arr);
  console.log(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
// module.exports = {
//   flattenArray2d,
//   flattenArray3d,
// };
