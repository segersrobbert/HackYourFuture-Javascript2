'use strict'

//Write a JavaScript function to check if an object contains given property.

var myBooks = {
    a: "Hamlet",
    b: "Last Leaf",
    c: "Canterbury Tales"
};
var isHasProperty = (myBooks, a, b, c) => {

    if (myBooks.hasOwnProperty('a')) {
        console.log('Yes, I have ' + a);
    } else {
        console.log('No, I do not have ' + a + 'book');
    };

};
console.log(isHasProperty(myBooks, 'hamlet'));

// Write a JavaScript program to get the length (amount of keys) of a JavaScript object.

var student = {
    name: "John",
    sclass: "IV",
    no: 12
};

console.log(Object.keys(student).length);

//Write a JavaScript program to create a Clock. Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45" 


setInterval(function() {

    var d = new Date();

    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

}, 1000);