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
console.log(maartjesTasks);
function computeEarnings(tasks, hourlyRate) {
  const durationInHrs = tasks.map(x => x.duration / 60); // Replace this comment and the next line with your code
  const countedHours = durationInHrs.filter(x => x >= 2).map(x => +x.toFixed(2));

  console.log(countedHours); // console.log(tasks, hourlyRate);
  return countedHours.reduce((acc, cv) => acc + cv * hourlyRate);
}

// eslint-disable-next-line no-unused-vars
var earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(earnings);
// add code to convert `earnings` to a string rounded to two decimals (euro cents)
console.log(earnings);
console.log(`Maartje has earned €${earnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
