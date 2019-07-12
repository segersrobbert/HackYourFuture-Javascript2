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
## 12. 
