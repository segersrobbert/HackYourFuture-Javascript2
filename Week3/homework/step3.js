'use strict'
function createBase (base) {
  console.log('The base is: ' + base)
  return function (numToAdd) {
    return numToAdd + base
  }
}

console.log('*********************************')
console.log('*********Exercise # 3 ***********')
const addSix = createBase(6)
console.log('This returs 16 === %c' + addSix(10), 'color:blue') // returns 16
console.log('This returs 27 === %c' + addSix(21), 'color:blue') // returns 27
console.log('*********************************')
// Do not change or remove anything below this line
module.exports = createBase
