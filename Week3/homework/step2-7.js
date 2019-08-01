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

/* The first function is clear that we are assigning a value to X which is 9 and then 
we are calling the variable x by executing the function.
The second one we are declaring a variable Y and we are assigning an object that has one property which is x : 9
then we are executing the function by calling the variable Y as an argument, but inside the function it's we are calling 
the first value of the first property which is x so when we call the value it should give us 9, 
so that's why we have the same result here :)
*/
