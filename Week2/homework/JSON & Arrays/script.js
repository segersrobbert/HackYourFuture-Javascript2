'use strict';
// First exercise
{
  const fruits = ['Banana', 'Apple', 'Kiwi', 'Orange', 'Lemon', 'Strawberry'];

  function first(no) {
    var first_items = fruits.splice(0, no);
    console.log('ARRAYS 1st exercise:', first_items);
  }
  // Here we are displaying the first 2 items of the array
  first(2);

  // Second exercise

  var number = [2, 8, 0, 5, 7, 8, 6, 3];
  var array = [];

  function put_dash() {
    for (var i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
        array.push(number[i], '-');
      } else {
        array.push(number[i]);
      }
    }
    console.log('ARRAYS 2nd exercise:', array.join(''));
  }
  put_dash();
}

// Third exercise
const fruits2 = ['Banana', 'Apple', 'Kiwi', 'Banana', 'Lemon', 'Banana'];
var counts = {};
var compare = 0;
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
      mostFrequent = fruits2[i];
    }
  }
  console.log('ARRAYS 3rd exercise:', mostFrequent);

  return mostFrequent;
})(fruits2);

// Fourth exercise

const text = 'The Quick Brown Fox';
let transformed_text = '';
function swap(letter) {
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === letter[i].toLowerCase()) {
      transformed_text += letter[i].toUpperCase();
    } else {
      transformed_text += letter[i].toLowerCase();
    }
  }
  console.log('ARRAYS 4th exercise:', transformed_text);
}
swap(text);

// Json exercises

// First exercise
const fruits3 = { Name: 'Apple', Country: 'Belgium' };
const object_length = Object.keys(fruits3).length;
console.log('JSON 1st exercise:', object_length);

// Second exercise

function clock() {
  const day = new Date();
  const hour = day.getHours();
  const minute = day.getMinutes();
  const second = day.getSeconds();
  const time = hour + ':' + minute + ':' + second;
  console.log('JSON 2nd exercise:', time);
}

setInterval(clock, 1000);
clock();
