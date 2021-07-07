//first exercise 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function firstElement(n) {

    return arr.slice(0, n);

}

firstElement = array[0];

console.log(firstElement(3));
console.log(arr[num]);
// I cannot finish it


//Second exercise

var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
        result.push('-', str[i]);
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));

//third exercise

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(item + " ( " + mf + " times ) ");

//fourth

var str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for (let i = 0; i < str.length; i++) {
    if (UPPER.includes(str[i])) {
        result.push(str[i].toLowerCase());
    } else if (LOWER.includes(str[i])) {
        result.push(str[i].toUpperCase());
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));