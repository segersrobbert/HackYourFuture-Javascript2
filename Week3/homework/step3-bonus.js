'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  var unique = [];
  for (let i in arr) {
    if (unique.includes(arr[i])) continue; //if the statement inside if is true, it will continue(meaning it will skip one iteration)
    unique.push(arr[i]);
  }
  return unique;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues); // ["a", "b", "c", "d", "e", "f"]

// Do not change or remove anything below this line
module.exports = makeUnique;
