'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // --> 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); // --> {x: 10}

// Add your explanation as a comment here
/* In the first function(f1(val)), the value of the variable is passed an argument to the function, 
so that whatever happens inside the function doesn't affect the value of the variable 'x' itself.

   But in the second function(f2(val)), because the variable 'y' itself an object, 
while passing y as as an argument to the function, actually we pass the references of the object as 
argument to the function, so that once function has access to references of the object keys, then
whatever happens to those references inside the function affects the value of the object variable 'y'
itself. 
*/
