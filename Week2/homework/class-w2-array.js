// eslint-disable-next-line no-lone-blocks
'use strict'
{
  //  ************************************** //
  // Exercise One:
  const arr1 = [' one ', ' two ', ' three ', ' four ', ' five ', ' six ', ' seven ', ' eight ', ' nine ', ' ten ']
  function fistNElements(arry, n) {
    var r1 = document.getElementById('r1')
    r1.innerHTML = ' '
    arry.forEach(function (element, index) {
      if (index < n) {
        r1.innerHTML = r1.innerHTML + element
      }
    })
  }
  function exerciseOne() {
    var inputE1 = document.getElementById('n1')
    // if there is parameter the function  exerciseOne call fistNElements function
    if (inputE1.value !== '') {
      fistNElements(arr1, parseInt(inputE1.value))
    } else { // if there isnt' parameter the function  exerciseOne return the fist element of array
      var r1 = document.getElementById('r1')
      r1.innerHTML = arr1[0]
    }
  }
  var e1 = document.getElementById('array1')
  var objectButton = document.getElementById('1')
  e1.innerHTML = 'The array with 10 item:' + arr1.toString().replace(/,/g, '')
  objectButton.addEventListener('click', exerciseOne) // Call exercise One.
  //  ************************************** //
  //  ************************************** //
  // Exercise two:
  function addDashes(str) {
    // Pass String to Array
    var arrStrified = JSON.stringify(str.split(''))
    var arry = JSON.parse(arrStrified)
    var arryCopy = JSON.parse(arrStrified)
    var numbefore = ''
    var newPosition = 0
    arry.forEach(function (element, index) {
      if (numbefore !== '') {
        if (numbefore % 2 === 0 && element % 2 === 0) {
          arryCopy.splice(index + newPosition, 0, '-')
          newPosition++
        }
      }
      numbefore = element
    })
    // Before Print pass array to string and remove colons:","
    var r2 = document.getElementById('r2')
    r2.innerHTML = `New value: ${arryCopy.toString().replace(/,/g, '')}`
  }
  function exerciseTwo() {
    var str2 = document.getElementById('str2')
    addDashes(str2.value)
  }
  var objectButton2 = document.getElementById('2')
  objectButton2.addEventListener('click', exerciseTwo) // Call exercise two

  //  ************************************** //
  //  ************************************** //
  // Exercise tree:
  const arr3 = [' ball ', ' computer ', ' ball ', ' chair ', ' car ', ' mouse ', ' ball ', ' car ', ' ball ', ' mouse ']
  function findFrequentlyItem(arry) {
    var objFrequency = {}
    var element = ''
    var frequency = 0
    // Move into the array and save frequently in a object
    arry.forEach(value => {
      if (objFrequency[value]) {
        objFrequency[value]++
      } else {
        objFrequency[value] = 1
      }
      return objFrequency.value
    }
    )
    //  Eval object frequency
    for (const prop in objFrequency) {
      if (frequency < objFrequency[prop]) {
        frequency = objFrequency[prop]
        element = prop
      }
    }
    var r3 = document.getElementById('r3')
    r3.innerHTML = `The item with most frequencies is "${element}" appers  ${frequency} times`
  }
  function exerciseThree() {
    findFrequentlyItem(arr3)
  }
  var objectButton3 = document.getElementById('3')
  var e3 = document.getElementById('array3')
  e3.innerHTML = 'The array is: ' + arr3.toString().replace(/,/g, '')
  objectButton3.addEventListener('click', exerciseThree) // Call exercise three

  //  ************************************** //
  //  ************************************** //
  // Exercise four:
  function swapCase(str) {
    // Pass String to Array
    var arrStrified = JSON.stringify(str.split(''))
    const arry = JSON.parse(arrStrified)
    var newArry = arry.map(value => {
      return (value === value.toUpperCase()) ? value.toLowerCase() : value.toUpperCase()
    })
    var r4 = document.getElementById('r4')
    r4.innerHTML = `New value: ${newArry.toString().replace(/,/g, '')}`
  }
  function exerciseFour() {
    var str4 = document.getElementById('str4')
    swapCase(str4.value)
  }
  var objectButton4 = document.getElementById('4')
  objectButton4.addEventListener('click', exerciseFour) // Call exercise three
}
