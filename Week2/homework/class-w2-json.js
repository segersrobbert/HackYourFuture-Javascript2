// eslint-disable-next-line no-lone-blocks
'use strict'
{
  //  ************************************** //
  // Exercise One:
  var dog1 = {
    type: 'dog',
    name: 'Oliver',
    color: 'black',
    legs: 4,
    breed: 'schnauzer'
  }
  function getLengthObj(obj) {
    console.log(Object.keys(obj))
    let size = 0
    Object.keys(obj).forEach(x => size++)
    var r1 = document.getElementById('r1')
    r1.innerHTML = 'The Object length is ' + size
  }
  function exerciseOne() {
    getLengthObj(dog1)
  }
  var e1 = document.getElementById('obj1')
  var objectButton = document.getElementById('1')
  e1.innerHTML = 'The object is: ' + JSON.stringify(dog1, null, 4)
  objectButton.addEventListener('click', exerciseOne) // Call exercise One.
  //  ************************************** //
  // Exercise two:
  var cat2 = {
    type: 'cat',
    name: 'Minino',
    color: 'white',
    legs: 4,
    tail: 1,
    breed: 'Angora'
  }
  function checkPropertyObj(obj, property) {
    var r1 = document.getElementById('r2')
    r1.innerHTML = obj.hasOwnProperty(property) ? ' Yes, the object have the property' : 'No, the object don\'t have the property'
  }
  function exerciseTwo() {
    var prop2 = document.getElementById('i2')
    checkPropertyObj(cat2, prop2.value)
  }
  var e2 = document.getElementById('obj2')
  var objectButton2 = document.getElementById('2')
  e2.innerHTML = 'The object is: ' + JSON.stringify(cat2, null, 4)
  objectButton2.addEventListener('click', exerciseTwo) // Call exercise two
  //  ************************************** //
  // Exercise three:
  var interval
  function beginClock() {
    var f = new Date()
    var cad = f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds()
    var r3 = document.getElementById('r3')
    r3.innerHTML = cad
    interval = setTimeout(beginClock, 1000)
  }
  function stropClock() {
    clearTimeout(interval)
    var r3 = document.getElementById('r3')
    r3.innerHTML = 'The clock is stoped'
  }
  var objectButton3 = document.getElementById('3a')
  objectButton3.addEventListener('click', beginClock) // Beging the clock
  var objectButton4 = document.getElementById('3b')
  objectButton4.addEventListener('click', stropClock) // Beging the clock
}
