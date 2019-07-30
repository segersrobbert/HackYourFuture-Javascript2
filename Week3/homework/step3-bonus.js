'use strict';
const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  var uniqueArray = [];
  for (var value of arr) {
    if (uniqueArray.indexOf(value) === -1) {
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
