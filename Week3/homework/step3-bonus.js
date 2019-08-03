'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
 arr.sort().map(x => {if(arr.indexOf(x)!=arr.lastIndexOf(x)) arr.splice(arr.indexOf(x),1)});
 return arr; 
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
