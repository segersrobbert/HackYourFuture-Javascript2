    'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;
console.log('orginal' , maartjesTasks);

function computeEarnings(tasks, hourlyRate) {
   
 let newTasks = tasks.map(function(val) {
    return {
        name: val.name,
        duration: (val.duration/60).toFixed(2), //Map the tasks to durations in hours.
        earning: '€'+((val.duration/60).toFixed(2))*hourlyRate //Multiply the each duration by a per-hour rate for billing (use €20/hour)
    };
});
tasks = newTasks.filter(newTasks => newTasks.duration >= 2); //Filter out everything that took less than two hours
console.log('filtered ',tasks);
//and sum it all up.
let sum = 0
sum = tasks
  .map(task => (task.duration) * hourlyRate)
  .reduce((prev, cur) => prev + cur, 0)
return sum;
}
let earning = computeEarnings(maartjesTasks, maartjesHourlyRate);


// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${earning.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
