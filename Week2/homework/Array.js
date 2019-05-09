//Write a JavaScript function to get the first element of an array.

/*const arr = [1, 2, 3, 4];
const getFirstElement = arr => arr.shift();
console.log(getFirstElement(arr));

//Passing a parameter 'n' will return the first 'n' elements of the array.

const arr1 = [1, 2, 3, 4];
const getFirstNElements = (x, n) => x.slice(0, n);
console.log(getFirstNElements(arr1, 3));*/

//combined solution with default parameter

const getElements = (x, n = 1) => x.slice(0, n);
console.log(getElements(arr1));
console.log(getElements(arr1, 3));

//Write a JavaScript program to find the most frequent item of an array.

const arr2 = [3, 4, 4, 4, 2, 3, 4, 3, 4];
let getMostFrequent = arr => {
  //we are creating an object of occurrences
  const temp = arr.reduce((obj, el) => {
    obj[el] = (obj[el] || 0) + 1;
    return obj; //{2: 1, 3: 3, 4: 5}
  }, {});

  console.log(temp); //{2: 1, 3: 3, 4: 5}
  //loop through object with sort method and find the most frequent one in the index[0] => sorted[0]
  const sorted = Object.keys(temp).sort((a, b) => temp[b] - temp[a]);
  console.log(sorted); //["4", "3", "2"]
  console.log(temp[sorted[0]]); //5=>How many occurrence
  return sorted[0]; //4=>Most frequent
};
console.log(getMostFrequent(arr2)); //4

/*Write a JavaScript program which accept a string as input and swap the case of each character.
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX’.*/

const swapCase = str => {
  const reversed = str
    .split("")
    .map(x => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
  return reversed;
};
console.log(swapCase("The Quick Brown Fox"));

           //BONUS
/*Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.*/

(function dashes() {
  var numbers = "025468".split('');
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
      numbers.splice(i + 1, 0, '-');
    }
  };

  console.log(numbers.join(''));
})();
