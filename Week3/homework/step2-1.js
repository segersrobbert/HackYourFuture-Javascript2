'use strict';

function foo(func) {
  //Write a function that takes another function as an argument and runs it.

  console.log(func);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
