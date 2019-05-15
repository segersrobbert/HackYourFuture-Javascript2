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
  const newVal = val.assign({}, val);
  newVal.x = newVal.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
//when passing args by value you pass a copy of that value and the functin operates on that copy not the original value
  // when passing args by reference you pass a pointer to the value in memory so the function operates on that value

  // this how to avoid passing by reference side effect
// 'use strict';

// const x = 9;
// function f1(val) {
//   val = val + 1;
//   return val;
// }

// f1(x);

// console.log(x);

// const y = { x: 9 };
// function f2(val) {
//   function jsonCopy(src) {
//     return JSON.parse(JSON.stringify(src));
//   }
//   const newVal = jsonCopy(val);
//   newVal.x = newVal.x + 1;
//   return val;
// }

// f2(y);

// console.log(y);
