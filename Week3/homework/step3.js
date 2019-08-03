'use strict';

function createBase(base) {
  return function(x) {
    return base + x;
  };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

const addTen = createBase(10);
console.log(addTen(30)); // returns 40

// Do not change or remove anything below this line
module.exports = createBase;
