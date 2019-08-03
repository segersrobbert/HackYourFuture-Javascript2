'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  let farr = [];
  
  for(let firstd of arr){
    for (let secd of firstd){
      farr.push(secd);
    }
  }
  
  return farr;
}

function flattenArray3d(arr) {
  let farr = [];
  
  for(let firstd of arr){
    for (let secd of firstd){
      for(let thirdd of secd){
      farr.push(thirdd);
      }
    }
  }
  
  return farr;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
