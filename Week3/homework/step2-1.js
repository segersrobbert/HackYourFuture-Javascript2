'use strict'

function foo (func) {
  func()
}

function bar () {
  console.log('Hello, I am bar!')
}
console.log('*********************************')
console.log('*******Exercise # 2.1 ***********')
foo(bar)
console.log('******************************** *')
// Do not change or remove anything below this line
module.exports = foo
