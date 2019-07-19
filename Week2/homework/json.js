
// Write a JavaScript program to get the length (amount of keys) of a JavaScript object.
const agency = {
     Name: 'Europe Education Guide', 
     Description: 'Educational Consultancy',
     WebSite: 'wwww.eduadviser.org',
     Since : 2018 
    };
const objLength = Object.keys(agency).length;
console.log(objLength);


// Write a JavaScript function to check if an object contains given property.

const objProperty = function(obj, property) {
    return obj.hasOwnProperty(property);
};
console.log(objProperty(agency,'Name'));

// Write a JavaScript program to create a Clock. Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45" 

function myClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const timeIs = hour + ':' + minute + ':' + second;
    console.log(timeIs);
  }
  setInterval(myClock, 1000);
  myClock();
  