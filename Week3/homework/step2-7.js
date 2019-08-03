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

/* f1(x) : We assign 9 to x, then add 1 to the value of x with its function. 
the result returns to 10, but the value of the constant cannot be changed by reassignment. 
x remains the same. print 9 as x value on the console.
*/

/*


*/
