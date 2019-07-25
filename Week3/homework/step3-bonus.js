'use strict'

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']

function makeUnique (arr) {
  // Replace this comment and the next line with your code
  arr.reverse()
  const cloneArr = [...arr]
  return arr.filter(x => {
    cloneArr.shift()
    return cloneArr.indexOf(x) < 0
  }).reverse()
}

console.log('***************************************')
console.log('*********Exercise # 3-bonus ***********')
const uniqueValues = makeUnique(values)
console.log(uniqueValues)
console.log('***************************************')
// Do not change or remove anything below this line
module.exports = makeUnique
