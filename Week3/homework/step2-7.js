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
let comment1 = 'In the first case: function f1 received  like parameter the value of 9 \
to this parameter is added 1 and the function return 10. The constant "x" didn\'t suffer \
any change because it was passed only its value.'
let comment2 = 'In the secod case: function f2 received like parameter the reference of the object "y" \
this object has a  property "x" witch was added 1 to this property and the function return 10. The property "x" of the object "y" was \
changed because originaly  it was passed   its reference.'

console.log('%c' + comment1, 'color:blue')
console.log('%c' + comment2, 'color:red')

