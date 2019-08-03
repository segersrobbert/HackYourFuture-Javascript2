'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
For f1() the parameter is given to be variable. Therefore, f1(x) copies the given value x rather than referencing to x directly. 
Whereas for f2() the parameter is an object. And objects reference values. Thus when calculating, the value is directly referenced to y.
and from there to x, changing the original value.

*/
