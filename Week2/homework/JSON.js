//Write a JavaScript function to check if an object contains given property.
const object1 = {
    "name": "Sara",
    "age": 12,
    "class": 6

};
var hasOwnProperty = (Object, property) => Object.hasOwnProperty(property);
console.log(hasOwnProperty(object1, "name")); // true
console.log(hasOwnProperty(object1, "class")); //true
console.log(hasOwnProperty(object1, "color")); //false

/*const hasProperty = Object.keys(object1).filter(x => x === "age").length === 1;
console.log(hasProperty);// true*/

//Write a JavaScript program to get the length (amount of keys) of a JavaScript object

var object2 = {
    "a": 5,
    "b": 11,
    "c": 12,
    "d": "hello",
    "e": 14,
    "f": -1
};

const lengthKeys = (keys) => Object.keys(keys).length;

console.log(lengthKeys(object2)); // 6

          //BONUS
//Write a JavaScript program to create a Clock. 
//Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45"

function timer() {
    const time = new Date();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}
setInterval(timer, 1000);
