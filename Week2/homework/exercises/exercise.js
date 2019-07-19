'use strict';
{
  /*Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/

  const myArray = [42, 51, 44, 2, 55, 3, 43, 70, 68, 93];
  function getTheFirstElement(array, index) {
    return myArray.splice(0, index);
  }
  console.log(getTheFirstElement(myArray, 1));
  console.log(myArray);

  /*Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8.*/

  const number = 4251442553489;
  const str = number.toString();
  const result = [str[0]];

  function dashesBetweenEvenNumbers(num) {
    for (let x = 1; x < str.length; x++) {
      if (num[x - 1] % 2 === 0 && num[x] % 2 === 0) {
        result.push('-', num[x]);
      } else {
        result.push(num[x]);
      }
    }
    return result.join('');
  }

  console.log(dashesBetweenEvenNumbers(str));

  //Write a JavaScript program to find the most frequent item of an array.

  var arr = [3, 7, 7, 7, 2, 3, 7, 3, 7, 2, 4, 9];
  var counts = {};
  var compare = -1;
  var keys = [];
  var mostFrequent;
  (function(array) {
    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i];

      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = arr[i];
      }
    }
    return mostFrequent;
  })(arr);

  /* Write a JavaScript program which accept a string as input and swap the case of each character.
  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

  var swapCase = function(letters) {
    var newLetters = '';
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === letters[i].toLowerCase()) {
        newLetters += letters[i].toUpperCase();
      } else {
        newLetters += letters[i].toLowerCase();
      }
    }
    console.log(newLetters);
    return newLetters;
  };

  var input = 'HackYourFuture';
  var outPut = swapCase(input);

  //JASON
  //Write a JavaScript function to check if an object contains given property.

  var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
  };

  var check = (obj, key) => {
    if ('key' in obj) {
      return 'It has property of ' + key + '.';
    } else {
      return 'It has not property of ' + key + '.';
    }
  };
  console.log(check(person, 'car'));

  //Write a JavaScript program to get the length (amount of keys) of a JavaScript object.

  var lengthofObject = Object.keys(person).length;
  console.log(lengthofObject);

  // Write a JavaScript program to create a Clock. Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45"

  function clock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const time = hour + ':' + minute + ':' + second;
    console.log('It is ' + time);
  }
  setInterval(clock, 1000);
  clock();
}
