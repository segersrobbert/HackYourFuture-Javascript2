const evenNumbers = [0, 2, 4, 8, 10, 12, 14, 4];
function firstElementOfArray(arry, n) {
  const result = arry.slice(0, n);
  return result;
}
console.log(firstElementOfArray(evenNumbers, 3)); //[0, 2, 4]
/* write Js program which accepts a number as input and insert dashes(-)
   between each two even numbers ex: 025468 */
function insertDash(num) {
  let str = num.toString();
  let result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      result.push(`-${str[i]}`);
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}
console.log(insertDash(1254784));// 1-25-47-8-4
// write the javascript program to find the most frequent item of an arry.
let frequentItem = function (arry) {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < arry.length; i++) {
    for (let j = i; j < arry.length; j++) {
      if (arry[i] == arry[j])
        m++;
      if (mf < m) {
        mf = m;
        item = arry[i];
      }
    }
    m = 0; //
  }
  return `the most frequent element is: ${item} and appears ${mf} times`;
}
console.log(frequentItem([1, 2, 3, 4, 6, 2, 1, 1]));// the most frequent element is: 1 and appears 3 times
// write a js program which accepts a string and swap the case of each character.
const swapCase = function (string) {
  const inputArry = string.split('');
  let swapArry = inputArry.map(checkCase); // call the checkCase function 
  return swapArry.join('')
}
console.log(swapCase('The Quick Brown Fox')) // tHE qUICK bROWN fOX
// create a function that checks Case and swap
function checkCase(x) {
  if (x === x.toLowerCase()) { // check if x is lower case
    x = x.toUpperCase();
  } else {
    x = x.toLowerCase();
  }
  return x;
}
