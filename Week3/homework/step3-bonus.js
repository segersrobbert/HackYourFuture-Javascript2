'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  var newArr = [... new Set(arr)];
  console.log(newArr);
}

const uniqueValues = makeUnique(values);
//console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
