'use strict'
{
  function doubleOddNumbers(numbers) {
    var newNumbers = []
    newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2)
    return newNumbers
  }
  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  function exerciseOne() {
    var r1 = document.getElementById('r1')
    r1.innerHTML = doubleOddNumbers(myNumbers)
  }
  var e1 = document.getElementById('array1')
  var objectButton = document.getElementById('1')
  e1.innerHTML = 'The array is: ' + myNumbers.toString()
  objectButton.addEventListener('click', exerciseOne) // Call exercise One.
  // Do not change or remove anything below this line
  module.exports = {
    myNumbers,
    doubleOddNumbers
  }
}
