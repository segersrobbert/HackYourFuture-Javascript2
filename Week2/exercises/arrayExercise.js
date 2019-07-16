'use strict';

/*Write a Javascript function to get first element of an array.
Passing a parameter 'n' will return the fist 'n' elements of the array.*/

const numbers = [' one ', ' two ', ' three ', ' four ', ' five '];
document.getElementById('array').innerHTML = 'Array :' + numbers;

function getFirstElement(array, index) {
  const newArray = array.slice(0, index);
  return newArray;
}

function callFistElement() {
  document.getElementById('exe-1').innerHTML = getFirstElement(numbers, 3);
}

//  ************************************** //

/* Write  a Javascript program which accept a number as input an insert dashes (-) between
each two even numbers.For example if you accept 025468 the output should be 0-254-6-8. */

function dashInsert(str) {
  var arrayNumbers = str.split('');
  var newString = '';
  for (var i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0 && arrayNumbers[i + 1] % 2 === 0) {
      newString = newString + arrayNumbers[i] + '-';
    } else {
      newString = newString + arrayNumbers[i];
    }
  }
  return newString;
}
function callDashInsert() {
  const inputValue = document.querySelector('input').value;
  document.getElementById('exe-2').innerHTML = dashInsert(inputValue);
}

//  ************************************** //

/* write a Javascript program to find the most frequent item of an array.*/

const animals = [' cat ', ' dog ', ' bird ', ' lion ', ' cat ', ' dog ', ' cat '];
document.getElementById('animals').innerHTML = 'Array :' + animals;

function mostFrequentItem(array) {
  var result = array[0];
  var compare = 0;
  for (var i = 0; i < array.length; i++) {
    var count = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count > compare) {
      compare = count;
      result = array[i];
    }
  }
  return result;
}

function callFrequentItem() {
  document.getElementById('exe-3').innerHTML = mostFrequentItem(animals);
}

//  ************************************** //

/* write a Javascript program which accept a string as input and swap the case of each
character.For example if you input 'The Quick Brown Fox' the output should be 
'tHE qUICK bROWN fOX' .*/

function caseAlter(txt) {
  var output = '';

  for (var i = 0; i < txt.length; i++) {
    if (txt[i] == txt[i].toUpperCase()) {
      output += txt[i].toLowerCase();
    } else {
      output += txt[i].toUpperCase();
    }
  }

  return output;
}
function callCaseAlter() {
  const input = document.getElementById('case-alter').value;
  document.getElementById('exe-4').innerHTML = caseAlter(input);
}
