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
[PYH](http://www.pythontutor.com/javascript.html#code=//%20the%20global%20variable%0Avar%20watchList%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Title%22%3A%20%22Inception%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Year%22%3A%20%222010%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Rated%22%3A%20%22PG-13%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Released%22%3A%20%2216%20Jul%202010%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Runtime%22%3A%20%22148%20min%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Genre%22%3A%20%22Action,%20Adventure,%20Crime%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Director%22%3A%20%22Christopher%20Nolan%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Writer%22%3A%20%22Christopher%20Nolan%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Actors%22%3A%20%22Leonardo%20DiCaprio,%20Joseph%20Gordon-Levitt,%20Ellen%20Page,%20Tom%20Hardy%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Plot%22%3A%20%22A%20thief,%20who%20steals%20corporate%20secrets%20through%20use%20of%20dream-sharing%20technology,%20is%20given%20the%20inverse%20task%20of%20planting%20an%20idea%20into%20the%20mind%20of%20a%20CEO.%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Language%22%3A%20%22English,%20Japanese,%20French%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Country%22%3A%20%22USA,%20UK%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Awards%22%3A%20%22Won%204%20Oscars.%20Another%20143%20wins%20%26%20198%20nominations.%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Poster%22%3A%20%22http%3A//ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw%40%40._V1_SX300.jpg%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Metascore%22%3A%20%2274%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbRating%22%3A%20%228.8%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbVotes%22%3A%20%221,446,708%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbID%22%3A%20%22tt1375666%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Type%22%3A%20%22movie%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Response%22%3A%20%22True%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Title%22%3A%20%22Interstellar%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Year%22%3A%20%222014%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Rated%22%3A%20%22PG-13%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Released%22%3A%20%2207%20Nov%202014%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Runtime%22%3A%20%22169%20min%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Genre%22%3A%20%22Adventure,%20Drama,%20Sci-Fi%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Director%22%3A%20%22Christopher%20Nolan%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Writer%22%3A%20%22Jonathan%20Nolan,%20Christopher%20Nolan%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Actors%22%3A%20%22Ellen%20Burstyn,%20Matthew%20McConaughey,%20Mackenzie%20Foy,%20John%20Lithgow%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Plot%22%3A%20%22A%20team%20of%20explorers%20travel%20through%20a%20wormhole%20in%20space%20in%20an%20attempt%20to%20ensure%20humanity's%20survival.%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Language%22%3A%20%22English%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Country%22%3A%20%22USA,%20UK%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Awards%22%3A%20%22Won%201%20Oscar.%20Another%2039%20wins%20%26%20132%20nominations.%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Poster%22%3A%20%22http%3A//ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE%40._V1_SX300.jpg%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Metascore%22%3A%20%2274%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbRating%22%3A%20%228.6%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbVotes%22%3A%20%22910,366%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22imdbID%22%3A%20%22tt0816692%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Type%22%3A%20%22movie%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Response%22%3A%20%22True%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%5D%3B%0A%0A//%20Add%20your%20code%20below%20this%20line%0A%0Avar%20rating%20%3D%20%5B%5D%3B%0AwatchList.map%28x%20%3D%3E%20%7B%20%0A%20%20rating.push%28%7Btitle%3A%20x%5B%22Title%22%5D,%20%20rating%3A%20x%5B%22imdbRating%22%5D%7D%29%3B%0A%7D%29%0A//%20Add%20your%20code%20above%20this%20line%0Aconsole.log%28rating%29%3B%20&curInstr=7&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D) -> I had to cut the code, limitation of PythonTutor.
```js
// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var rating = [];
watchList.map(x => { 
  rating.push({title: x["Title"],  rating: x["imdbRating"]});
})
// Add your code above this line
console.log(rating); 
```
