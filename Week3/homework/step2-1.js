'use strict';

function foo(func) {
  return func(); // What to do here?

}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
