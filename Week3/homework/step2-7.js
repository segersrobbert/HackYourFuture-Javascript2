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
/*in the firs function x is the number and primitive
value and the primitive values are sends the value by copy the original value, so in the
 function we are changed the copy not the the orginal*/

/*but in the second function we send the value by referance the referance are creat the pointer addres in Heap, 
the change in the function also reflect in the orginal value.*/
