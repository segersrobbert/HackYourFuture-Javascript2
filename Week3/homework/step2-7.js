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
//When I first looked the functions (before I googled) ,
//I saw in the first function argument is a variable  outside the function.
//But in the second function argument  is an object and function is defined on objects.
//Then I googled:

//*Pass by Value*:
//In Pass by Value, Function is called by directly passing the value of the variable as the argument.
//Changing the argument inside the function doesn’t affect the variable passed from outside the function.
//However, when a variable refers to an object which includes array, the value is the reference to the object.

//*Pass by Reference*:
//In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument.
//Changing the argument inside the function affect the variable passed from outside the function. 
//In Javascript objects and arrays follows pass by reference.