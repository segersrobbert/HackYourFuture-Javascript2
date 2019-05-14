'use strict';

// Use a 'for' loop
const repeatStringNumTimesWithFor = (str, num) => {
  let result = '';
  for(let i = 0; i < num; i++ ){
   result += str;
  }
  console.log(str, num, result);
  return result;
};
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
const repeatStringNumTimesWithWhile = (str, num) => {
  let result = '';
  while(num > 0){
    result += str;
    num--;
  };
  console.log(str, num, result);

  return result;
};

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
const repeatStringNumTimesWithDoWhile = (str, num) => {
  let result = '';
  var i = 0;
  do {
    i++;
    result += str;
  } while (i < num);
  console.log(str, num, result);
  return result;
};

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
