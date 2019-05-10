# Homework Week 2

```
Topics discussed this week:
• Functions + JSON/Arrays
• Array Manipulations
• JSON
• Map and filter
• Arrow functions
```

> [Here](/Week3/README.md) you find the readings you have to complete before the third lecture.

### Step 1: More map, filter and `=>`

_Deadline Wednesday_

**1.1** Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

```js
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
```

Rewrite the above `doubleOddNumbers` function using `map` and `filter`; don't forget to use `=>`.


```js 
const myNumbers = [1, 2, 3, 4];
const newNumbers =[];

myNumbers.filter(num => num%2 !=0).map(num => newNumbers.push(num*2));

```
---

**1.2** Underneath you see a very interesting small insight in Maartje's work:

```js 
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
```

_Note: the durations are specified in minutes._

Write a program that computes how much Maartje has earned by completing these tasks, using `map` and `filter`. For the 'summing part' you can try your luck with `reduce`; alternatively, you may use `forEach` or a `for` loop.

Follow these steps. Each step should build on the result of the previous step.

- Map the tasks to durations in hours.
- Filter out everything that took less than two hours (i.e., remove from the collection)
- Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
- Output a formatted Euro amount, rounded to Euro cents, e.g: `€11.34`.
- Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. `durations`. For a single item, use a singular form, e.g. `duration`. For details, see [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md).
- Don't forget to use `=>`.


  - [pytut](http://tinyurl.com/y4vcq84s)

```js
//Array concat
const maartjesTasks = monday.concat(tuesday);
function calculateEarnings(){
//Map the tasks to durations in hours.
const convertHours = maartjesTasks.map(element =>element.duration/60)
//Filter out everything that took less than two hours (i.e., remove from the collection)
.filter(element=>element<=2)
//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
const earnedMoney = convertHours.reduce((sum, elem) => sum + elem * 20, 0);
//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
return `${earnedMoney.toFixed(2)}`;
}
console.log(calculateEarnings());
```
 
- [Second Trial- But the results are different I dont get it?](http://pythontutor.com/live.html#code='use%20strict'%3B%0A%0Aconst%20monday%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Write%20a%20summary%20HTML/CSS',%0A%20%20%20%20duration%3A%20180,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Some%20web%20development',%0A%20%20%20%20duration%3A%20120,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Fix%20homework%20for%20class10',%0A%20%20%20%20duration%3A%2020,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Talk%20to%20a%20lot%20of%20people',%0A%20%20%20%20duration%3A%20200,%0A%20%20%7D,%0A%5D%3B%0A%0Aconst%20tuesday%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Keep%20writing%20summary',%0A%20%20%20%20duration%3A%20240,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Some%20more%20web%20development',%0A%20%20%20%20duration%3A%20180,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Staring%20out%20the%20window',%0A%20%20%20%20duration%3A%2010,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Talk%20to%20a%20lot%20of%20people',%0A%20%20%20%20duration%3A%20200,%0A%20%20%7D,%0A%20%20%7B%0A%20%20%20%20name%3A%20'Look%20at%20application%20assignments%20new%20students',%0A%20%20%20%20duration%3A%2040,%0A%20%20%7D,%0A%5D%3B%0A%0Aconst%20maartjesTasks%20%3D%20monday.concat%28tuesday%29%3B%0Aconst%20maartjesHourlyRate%20%3D%2020%3B%0A%0Afunction%20computeEarnings%28tasks,%20hourlyRate%29%20%7B%0A%20%20%0A%20%20const%20totalHours%20%3D%20maartjesTasks%0A%20%20.map%28element%20%3D%3Eelement.duration/60%29%0A%20%20.filter%28element%3D%3E%20element%3C%3D2%29%3B%0A%20%20%0A%20%20const%20sum%20%3D%20totalHours.reduce%28%28acc,%20curr%29%3D%3Eacc%20%2B%20curr%20*%20maartjesHourlyRate,%200%29%0A%20%20return%20sum%3B%0A%20%20%7D%0A%0A//%20eslint-disable-next-line%20no-unused-vars%0Aconst%20earnings%20%3D%20computeEarnings%28maartjesTasks,%20maartjesHourlyRate%29%3B%0A%0A//%20add%20code%20to%20convert%20%60earnings%60%20to%20a%20string%20rounded%20to%20two%20decimals%20%28euro%20cents%29%0A%0Aconsole.log%28%60Maartje%20has%20earned%20%24%7Bearnings.toFixed%282%29%7D%60%29%3B%0A%0A//%20Do%20not%20change%20or%20remove%20anything%20below%20this%20line%0Amodule.exports%20%3D%20%7B%0A%20%20maartjesTasks,%0A%20%20maartjesHourlyRate,%0A%20%20computeEarnings,%0A%7D%3B&cumulative=false&curInstr=57&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

```js
const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  
  const totalHours = maartjesTasks
  .map(element =>element.duration/60)
  .filter(element=> element<=2);
  
  const sum = totalHours.reduce((acc, curr)=>acc + curr * maartjesHourlyRate, 0)
  return sum;
  }

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned ${earnings.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
```
### Step 2: Array exercises
_Deadline Friday_

- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
[link](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-3.php)
```js 
let firstElement =  (array, n) => {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));
...
```

- Write a JavaScript program to find the most frequent item of an array.
[link](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php)

- Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX’.
[link](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-9.php)
##### BONUS

Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

```js 
const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let i=1; i<str.length; i++)
  {
    if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
     {
      result.push('-', str[i]);
     }
    else
     {
      result.push(str[i]);
     }
  }
console.log(result.join(''));

```

### Step 3: JSON exercises [links](https://www.w3resource.com/javascript-exercises/)
_Deadline Friday_
- Write a JavaScript function to check if an object contains given property.

```js
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
```
- Write a JavaScript program to get the length (amount of keys) of a JavaScript object.
[link](https://www.w3resource.com/javascript-exercises/javascript-object-exercise-3.php)
##### BONUS

=======
### Step 2: Array exercises
_Deadline Friday_

- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
- Write a JavaScript program to find the most frequent item of an array.
- Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX’.

##### BONUS

Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

### Step 3: JSON exercises
_Deadline Friday_
- Write a JavaScript function to check if an object contains given property.
- Write a JavaScript program to get the length (amount of keys) of a JavaScript object.

##### BONUS


Write a JavaScript program to create a Clock.
Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45" 

### Step 4: ROVER (bonus)

Finish up to chapter 7: JSON on [roverjs.com](http://roverjs.com/)!

### Step 5: **Some FreeCodeCamp challenges:** (bonus)


1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Use the map Method to Extract Data from an Array](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)


## How to hand in your homework:

Go over your homework one last time:

- Is your code properly formatted?
- Does every file start with `'use strict';`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Have you resolved all issues flagged by ESLint and the spell checker plugins (no wavy red and green underlines in VSCode)?
- Create  **1 NEW PULL REQUEST** containing all of this homework 

Here is a refresher on the needed GIT commands & workflow:

- [Handing in homework](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)

</br></br>

#### Good luck students!
