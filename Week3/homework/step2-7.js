'use strict';

// The first function is Pass by Value.
// This function is directly passing the value of the variable as the argument.
// Changing the argument inside the function DOESN'T affect
// ...the variable passed from outside the function.

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

// The second function is Pass by Refference.
// This function is directly passing the reference of the variable as the argument.
// Changing the argument inside the function DOES affect the variable passed from outside the function.
// In JS objects and arrays follows pass by reference.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);
