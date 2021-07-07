'use strict';

function createBase(base) {
  return function(n) {
    return n + base;
  };
}
const addSix = createBase(6);

/*const addSix = x => {
  6 + x;
  return x;
};
*/
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
