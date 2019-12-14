'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

let something = f1(x);

console.log(x);
console.log(something);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// the difference is x has a value of 9 while y has reference to the object as assigned. we can assign the returned new value to a variable like "something"
