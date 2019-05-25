'use strict';

function foo(func) {
  var myFunction = func();// What to do here?
  // Replace this comment and the next line with your code

}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;