'use strict';


//Write a JavaScript function to check if an object contains given property.

const testOfProperty = (object,prop) => 
  object.hasOwnProperty(prop);

const newObject = {tina:'dog',waffle:'cat',duman:'rabbit'};
console.log(newObject.hasOwnProperty('waffle'));


---

//Write a JavaScript program to get the length (amount of keys) of a JavaScript object


const lengthOfObject = obj => Object.keys(obj).length;

const newObject = {1:'a',2:'b',3:'c'};
console.log(lengthOfObject(newO
