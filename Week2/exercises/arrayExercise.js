'use strict';
var array = [1, 2, 3, 4, 5];

//Write a JavaScript function to get the first element of an array.
var getFirstElement = (arr) => {
  return arr.shift();
}

//...Passing a parameter 'n' will return the first 'n' elements of the array.
var getFirstNElements =  (array, n) => {
    if (n == null)
      return array[0];
    if (n < 0)
      return [];
    return array.splice(0, n);
  };
console.log(first(array));

//Write a JavaScript program to find the most frequent item of an array.
var frequentItem = (array) => {

};

//Write a JavaScript program which accept a string as input
//and swap the case of each character.
//For example if you input 'The Quick Brown Fox'
//the output should be 'tHE qUICK bROWN fOX’.
var text = 'The Quick Brown Fox';
var swapCharacters = (text) => {
  return text.split('')
    .map(
      (character) => character === character.toUpperCase() ? character.toLowerCase(): character.toUpperCase()
    ).join('');
};


//Write a JavaScript program which accept a number as input
//and insert dashes (-) between each two even numbers.
//For example if you accept 025468 the output should be 0-254-6-8.
