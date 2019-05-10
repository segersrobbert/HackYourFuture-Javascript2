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

function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  //Map the tasks to durations in hours.
  const durations= maartjesTasks.map(tasks=> tasks.duration);
  const durationsInHours = durations.map(durations =>durations/60);
  //Filter out everything that took less than two hours (i.e., remove from the collection)
  const plus2Hours = durationsInHours.filter( val => val >= 2);
  //Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
  const totalSum =plus2Hours.reduce(function (accumulator, currentValue) {
     return accumulator + (currentValue * maartjesHourlyRate);;
     }, 0);
  // add code to convert `earnings` to a string rounded to two decimals (euro cents)
  return totalSum.toFixed(2);
  console.log(tasks, hourlyRate);
}
  // eslint-disable-next-line no-unused-vars
  const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

  console.log(`Maartje has earned €${earnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
