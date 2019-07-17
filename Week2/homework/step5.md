## Comparisons with the Logical And Operator
[PYH](http://www.pythontutor.com/javascript.html#code=function%20testLogicalAnd%28val%29%20%7B%0A%20%20//%20Only%20change%20code%20below%20this%20line%0A%20%20if%20%28val%3C%3D50%20%26%26%20val%20%3E%3D25%29%20%7B%0A%20%20%20%20%20%20return%20%22Yes%22%3B%0A%20%20%7D%0A%20%20//%20Only%20change%20code%20above%20this%20line%0A%20%20return%20%22No%22%3B%0A%7D%0A//%20Change%20this%20value%20to%20test%0AtestLogicalAnd%2810%29%3B&curInstr=3&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)
```js
function testLogicalAnd(val) {
  // Only change code below this line
  if (val<=50 && val >=25) {
      return "Yes";
  }
  // Only change code above this line
  return "No";
}
// Change this value to test
testLogicalAnd(10);
```


## Record Collection
[PYH]( http://www.pythontutor.com/javascript.html#code=//%20Setup%0Avar%20collection%20%3D%20%7B%0A%20%20%20%20%222548%22%3A%20%7B%0A%20%20%20%20%20%20%22album%22%3A%20%22Slippery%20When%20Wet%22,%0A%20%20%20%20%20%20%22artist%22%3A%20%22Bon%20Jovi%22,%0A%20%20%20%20%20%20%22tracks%22%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%22Let%20It%20Rock%22,%20%0A%20%20%20%20%20%20%20%20%22You%20Give%20Love%20a%20Bad%20Name%22%20%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D,%0A%20%20%20%20%222468%22%3A%20%7B%0A%20%20%20%20%20%20%22album%22%3A%20%221999%22,%0A%20%20%20%20%20%20%22artist%22%3A%20%22Prince%22,%0A%20%20%20%20%20%20%22tracks%22%3A%20%5B%20%0A%20%20%20%20%20%20%20%20%221999%22,%20%0A%20%20%20%20%20%20%20%20%22Little%20Red%20Corvette%22%20%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D,%0A%20%20%20%20%221245%22%3A%20%7B%0A%20%20%20%20%20%20%22artist%22%3A%20%22Robert%20Palmer%22,%0A%20%20%20%20%20%20%22tracks%22%3A%20%5B%20%5D%0A%20%20%20%20%7D,%0A%20%20%20%20%225439%22%3A%20%7B%0A%20%20%20%20%20%20%22album%22%3A%20%22ABBA%20Gold%22%0A%20%20%20%20%7D%0A%7D%3B%0A//%20Keep%20a%20copy%20of%20the%20collection%20for%20tests%0Avar%20collectionCopy%20%3D%20JSON.parse%28JSON.stringify%28collection%29%29%3B%0A//%20Only%20change%20code%20below%20this%20line%0Afunction%20updateRecords%28id,%20prop,%20value%29%20%7B%0A%20%20if%20%28!%28value%3D%3D%22%22%20%26%26collectionCopy%5Bid%5D.hasOwnProperty%28prop%29%20%29%29%7B%0A%20%20%20%20switch%28prop%29%7B%0A%20%20%20%20%20case%20%22album%22%3A%0A%20%20%20%20%20case%20%22artist%22%3A%0A%20%20%20%20%20%20%20%20%20%20collectionCopy%5Bid%5D%5Bprop%5D%3Dvalue%3B%0A%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20case%20%22tracks%22%3A%0A%20%20%20%20%20%20%20%20%20%20if%28collectionCopy%5Bid%5D.hasOwnProperty%28prop%29%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20collectionCopy%5Bid%5D%5Bprop%5D.push%28value%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20else%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20collectionCopy%5Bid%5D%5Bprop%5D%20%3D%20%5Bvalue%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20%20%20%20%20%20%0A%20%20%7Delse%7B%0A%20%20%20%20delete%20collectionCopy%5Bid%5D%5Bprop%5D%3B%0A%20%20%7D%0A%20%20%20%20return%20collectionCopy%3B%0A%7D%0A//%20Alter%20values%20below%20to%20test%20your%20code%0AupdateRecords%285439,%20%22artist%22,%20%22ABBA%22%29%3B&curInstr=8&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)  
```js
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
function updateRecords(id, prop, value) {
  if (!(value=="" &&collectionCopy[id].hasOwnProperty(prop) )){
    switch(prop){
     case "album":
     case "artist":
          collectionCopy[id][prop]=value;
          break;
     case "tracks":
          if(collectionCopy[id].hasOwnProperty(prop)){
            collectionCopy[id][prop].push(value);
           }
          else{
            collectionCopy[id][prop] = [value];
          }
    }      
  }else{
    delete collectionCopy[id][prop];
  }
    return collectionCopy;
}
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
```

## Use the map Method to Extract Data from an Array
[PYH]( ) 
```js
var a = 7;
var b = a;
```
