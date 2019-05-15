'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const flattened1 = arr.flat(); // Replace this comment and the next line with your code
  console.log(flattened1);
}

function flattenArray3d(arr) {
  const flattened2D = arr.flat(1); // Replace this comment and the next line with your code
  console.log(flattened2D);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
