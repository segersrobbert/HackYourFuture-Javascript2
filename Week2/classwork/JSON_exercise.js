// write a js program to get the length of a js Object 
let lengthOfObject = (obj) => {
  console.log(Object.keys(obj).length);
}
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
let beri = new Person('Berihu', 26, 'Male')
Person.prototype.eyeColor = 'black';
lengthOfObject(beri);//3
// write Js function to check if an object contains given property 
let checkProperty = (obj, prop) => {
  if (obj.hasOwnProperty(prop)) {
    return `The Object has own property: ${prop}`;
  } else if (prop in obj) {
    return `The Object has prototype property`
  }
  else {
    return `No such Property`;
  }
}
console.log(checkProperty(beri, 'eyeColor')); // The Object has prototype property
console.log(checkProperty(beri, 'sex')); //The Object has own property: sex
// write a js program to create Clock
function my_Clock() {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function () {
  setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function (secs) {
  this.seconds += secs;
  if (this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if (this.minutes >= 60) {
    this.hours++;
    this.minutes = 0;
  }
  if (this.hours >= 24) {
    this.hours = 0;
  }
};
var clock = new my_Clock();
//clock.run();