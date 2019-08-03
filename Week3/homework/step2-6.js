'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  let flatArr = [];
  for (let i in arr) {
    for (let j in arr[i]) {
      flatArr.push(arr[i][j]);
    }
  }
  return flatArr;

}

function flattenArray3d(arr) {
  let flatArr = [];
  for (let i in arr) {
    for (let j in arr[i]) {
      for (let k in arr[i][j]) {
        flatArr.push(arr[i][j][k]);
      }
    }
  }
  return flatArr;

}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
