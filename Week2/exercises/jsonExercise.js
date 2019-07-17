//Write a JavaScript program to get the length of an JavaScript object.

var object;
object = {
    "Country": "Belgium",
    "Capital": "Brussels",
    "Language": "French-Dutch",
};

var getTheObjLength = key => {
    return Object.keys(key).length;
};

console.log(getTheObjLength(object));


//Write a JavaScript function to check if an object contains given property.

var checkHaskey = (obj, key) => {
    if (obj.hasOwnProperty(key)) {
        console.log("Yes, I have " + key);
    } else {
        console.log("I have not  " + key + " property");
    }

};
console.log(checkHaskey(object, "Capital"));


//Write a JavaScript program to create a Clock. Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45"


function myClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
};
setInterval(myClock, 1000);
