'use strict';

function Dog(name, color) {
  this.name = name;
  this.color = color;
}
Dog.prototype.numLegs = 4;
const hound = new Dog('Boby', 'Whit');
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
