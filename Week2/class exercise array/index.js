//JS function to return first element, and pass a number as parameter
const arrayMine = [
  'paramater_is_study',
  1,
  'time',
  'great op',
  'good work',
  1,
  2,
  2341,
  'parameter',
  'time',
];
console.log(arrayMine);

var n = window.prompt('Please enter first how many numbers you want to log');
var num1 = parseInt(n);

function nthItem(array, num1) {
  var arrayX = [];
  for (let i = 0; i < num1; i++) {
    arrayX.push(array[i]);
  }
  return arrayX;
}
console.log(nthItem(arrayMine, n));

//a function which accepts a number as input and insert dashes btw each two even number:
function evenNumbers() {
  var number = window.prompt('Please enter a number');
  const string = number.toString();
  const result = [string[0]];
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] % 2 === 0 && string[i] % 2 === 0) {
      result.push('-', string[i]);
    } else if (string[i - 1] % 2 === 1 && string[i] % 2 === 0) {
      result.push(string[i]);
    } else if (string[i - 1] % 2 === 0 && string[i] % 2 === 1) {
      result.push('-', string[i]);
    } else if (string[i - 1] % 2 === 1 && string[i] % 2 === 1) {
      result.push(string[i]);
    }
  }
  console.log(result.join(''));
}
evenNumbers();

//finding the most frequent item of an array
function findMostFrequent(array) {
  var map = {};
  var mostFrequentElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      ++map[array[i]];
      if (map[array[i]] > map[mostFrequentElement]) {
        mostFrequentElement = array[i];
        console.log('The most frequent element of the array is: ' + mostFrequentElement);
      } else if (map[array[i]] === map[mostFrequentElement]) {
        console.log('The array has more than one most frequent elements');
        console.log(
          'The most frequent elements of the array are: ' + mostFrequentElement + ', ' + array[i],
        );
      }
    }
  }
}

findMostFrequent(arrayMine);

//function accepting a string as input and swapping the case of each character
function swapCase() {
  var str = window.prompt('Please enter something');

  //first we define the alphabet and check the letters according to that
  var upperCases = 'ABCÇDEFGHIİJKLMNOÖPQRSTUÜVWXYZ';
  var lowerCases = 'abcçdefghıijklmnoöpqrstuüvwxyz';

  //we will check each letter according to upper and lower case and transform it:
  var result = [];
  for (var x = 0; x < str.length; x++) {
    if (upperCases.indexOf(str[x]) !== -1) {
      result.push(str[x].toLowerCase());
    } else if (lowerCases.indexOf(str[x]) !== -1) {
      result.push(str[x].toUpperCase());
    } else {
      result.push(str[x]);
    }
  }
  console.log(result.join(''));
}
swapCase();
