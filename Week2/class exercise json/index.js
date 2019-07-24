//JS program for getting the length of an object
var myObj = {};
myObj['full'] = 'Galatasaray';
myObj['short'] = 'GS';
myObj['league'] = 'Super League';
myObj['position'] = 1;
Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

var size = Object.size(myObj);
console.log('The length of the object is: ' + size);

//js function to check if object contains given prop
var x = window.prompt('Please enter a property to check if it exist in the object');
Object.check = function(obj, x) {
  for (let key in obj) {
    if (x === obj.hasOwnProperty(key)) console.log('This is a property of object');
    else console.log("This property doesn't exist in this object");
  }
};
Object.check(myObj);

//js program to create clock, console the seconds to html
function countTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ':' + m + ':' + s;
  var t = setTimeout(countTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}

//js program to create clock, console the seconds
function my_Clock() {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function() {
  setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function() {
  this.updateTime(1);
  console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
};
my_Clock.prototype.updateTime = function(secs) {
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
clock.run();
