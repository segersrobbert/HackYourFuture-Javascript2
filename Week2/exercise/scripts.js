"use strict";

// Array exercises
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const anArray = [
    "the_vegetarian",
    "watership_down",
    "adventures_sherlock_holmes",
    "alchemist",
    "frankenstein",
    "city_of_thieves",
    "gone_with_the_wind",
    "to_kill_mocking_bird",
    "war_and_peace",
    "things_fall_apart"
];

function get1stElement(arr, val) {
    const firstElem = arr.splice(0, val);
    return firstElem;
}

const returnedVal = get1stElement(anArray, 4);
console.log(returnedVal);


// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

const num = 9874654479841;
const str = num.toString();
const result = [str[0]];

for (let x = 1; x < str.length; x++) {
    if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
        result.push('-', str[x]);
    }
    else {
        result.push(str[x]);
    }
}
console.log(result.join(''));


//Write a JavaScript program to find the most frequent item of an array.

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(`${item} ( ${mf} times ) `);


// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const swapCase = function (letters) {
    let newLetters = "";
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}
const text = 'The Quick Brown Fox';
const swappedText = swapCase(text);


// Json exercises
// Write a JavaScript program to get the length of an JavaScript object.

const myObject = {
    Firstname: "Gareth",
    lastname: "Simpson",
    age: 21,
}

console.log(Object.keys(myObject).length);

/*  OR
let count = 0;
let i;
for (i in myObject) {
    if (myObject.hasOwnProperty(i)) {
        count++;
    }
}
console.log(count)
 */


// Write a JavaScript program to create a Clock.
// Console every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45"


function time() {
    let span;
    const d = new Date();
    const s = d.getSeconds();
    const m = d.getMinutes();
    const h = d.getHours();
    span = h + ":" + m + ":" + s;
    console.log(span)
}

setInterval(time, 1000);
