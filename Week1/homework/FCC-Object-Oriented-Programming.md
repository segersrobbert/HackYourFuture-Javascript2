# Free Code Camp Object Oriented Programming exercise 
## 1. Create a Basic JavaScript Object
```js
let dog = {
  name : 'bob',
  numLegs : 4,
};
```
## 2. Use Dot Notation to Access the Properties of an Object
```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);
```
## 3.  Create a Method on an Object
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  }
};
dog.sayLegs();
```
## 4. Make Code More Reusable with the this Keyword
```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();
```
## 5. Define a Constructor Function
```js
function Dog(){
  this.name = 'bob',
  this.color = 'white',
  this.numLegs = 4
}
```
## 6. Use a Constructor to Create Objects
```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();
```
## 7. Extend Constructors to Receive Arguments
```js
function Dog(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}
let terrier = new Dog ('buchi','white');
```
## 8. Verify an Object's Constructor with instanceof
```js
 function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Add your code below this line
let myHouse = new House(3);
myHouse instanceof House;
```
## 9. Understand Own Properties
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let prop in canary){
  if (canary.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
}
console.log(ownProps)
```
## 10. Use Prototype Properties to Reduce Duplicate Code
```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)
```
## 11. Iterate Over All Properties
```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
// Add your code below this line 
for (let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop)
  } else{
    prototypeProps.push(prop)
  }
}
console.log(prototypeProps); // numLegs
console.log(ownProps); // name
```
## 12. Understand the Constructor Property
```js
function Dog(name) {
  this.name = name;
}
// Add your code below this line
function joinDogFraternity(candidate) {
 if(candidate.constructor === Dog){
   return true;
 } 
 else {
   return false;
 }
}
let dog2 = new Dog('bob');
console.log(joinDogFraternity(dog2)) //true
```
## 13. Change the Prototype to a New Object
```js
function Dog(name) {
  this.name = name; 
}
Dog.prototype = {
  // Add your code below this line
  numLegs : 2,
  eat : function(){
    console.log('ham ham ham');
  },
  describe : function (){
    console.log(` Name of my dog is :${this.name}`)
  }
};
```
## 14. Remember to Set the Constructor Property when Changing the Prototype
```js
function Dog(name) {
  this.name = name; 
}
// Modify the code below this line
Dog.prototype = {
  constructor: Dog,// define the constructor property
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
console.log(Dog.prototype);
```
## 15. Understand Where an Object’s Prototype Comes From
```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);
```
## 16.  Understand the Prototype Chain
```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```
## 17. Use Inheritance So You Don't Repeat Yourself
```js
function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat : function (){
  console.log('nom nom nom')
  }
};
```
## 18. Inherit Behaviors from a Supertype
```js


