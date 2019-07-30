'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); //{x: 10}

// Function f1 is trying to change the value of const x. When we declare a variable with const, we cannot reassign the value of that variable.
// However, if the const variable has an array or object as its value, then we may change the content of it as we can see in f2.
