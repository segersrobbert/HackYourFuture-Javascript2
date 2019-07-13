
var myFavoriteBooks = [ "dostoyevsky_crime_and_punishment",
"george_orwell_animal_farm",
"franz_kafka_metamorphosis",
"sabahattin_ali_madonna_in_a_fur_coat",
"baris_bicakci_our_grand_despair",
"victor_hugo_les_miserables",
"anthony_burgess_a_clockwork_orange",
"jack_london_the_call_of_the_wild",
"dostoyevsky_notes_from_underground",
"kristin_hannah_the_nightingale"
]

 const myFavoriteBooksObj = {

  dostoyevsky_crime_and_punishment: {
     title: "Crime and Punishment",
     author:"Fyodor Dostoyevsky",
     genre :"Literature & Fiction ",
     language: "Russian",
     firstPublished : 1866
 
  },

  george_orwell_animal_farm:{
    title: "Animal Farm",
    author:"George Orwell",
    genre :"Satire & Fiction ",
    language: "English",
    firstPublished : 1945

 },

 franz_kafka_metamorphosis:{
    title: "The Metamorphosis",
    author:"Franz Kafka,",
    genre :"Classics & Fiction ",
    language: "German",
    firstPublished : 1915
},

 sabahattin_ali_madonna_in_a_fur_coat:{
    title: "Madonna in a Fur Coat",
    author:"Sabahattin Ali",
    genre :"Literature & Fiction",
    language: "Turkish",
    firstPublished : 1943

 },

 baris_bicakci_our_grand_despair:{
    title: "Our Grand Despair",
    author:"Baris Bicakci",
    genre :"Fiction",
    language: "Turkish",
    firstPublished : 2004
 },

 victor_hugo_les_miserables:{
    title: "Les Miserables",
    author:"Victor Hugo",
    genre :"Literature & Fiction",
    language: "French",
    firstPublished : 1862
 },

 anthony_burgess_a_clockwork_orange:{
    title: "A Clockwork Orange",
    author:"Anthony Burgess",
    genre :"Science Fiction",
    language: "English",
    firstPublished : 1962
 },

 jack_london_the_call_of_the_wild:{
    title: "The Call of the Wild",
    author:" Jack London",
    genre :"Classics & Fiction",
    language: "English",
    firstPublished : 1903
 },

 dostoyevsky_notes_from_underground:{
    title: "Notes from Underground",
    author:"Fyodor Dostoyevsky",
    genre :"Classics & Fiction",
    language: "Russian ",
    firstPublished :  1864
 },

 kristin_hannah_the_nightingale:{
    title: "The Nightingale",
    author:"Kristin Hannah",
    genre :"Historical Fiction",
    language: "English",
    firstPublished :  2015
 }
 }

const myFavoriteBooksCover = {

    dostoyevsky_crime_and_punishment: "./assets/crime_and_punishment.jpg",
    george_orwell_animal_farm:"./assets/animalfarm.jpg",
    franz_kafka_metamorphosis:"./assets/Metamorphosis.jpg",
    sabahattin_ali_madonna_in_a_fur_coat:"./assets/madonna_in_a_fur_coat.jpg",
    baris_bicakci_our_grand_despair:"./assets/our_grand_despair.jpg",
    victor_hugo_les_miserables:"./assets/les_miserables.jpg",
    anthony_burgess_a_clockwork_orange:"./assets/a_clockwork_orange.jpg",
    jack_london_the_call_of_the_wild:"./assets/the_call_of_the_wild.jpg",
    dostoyevsky_notes_from_underground:"./assets/notes_from_underground.jpg",
    kristin_hannah_the_nightingale:"./assets/the_nightingale.jpg"

}


function list_builder(){

    const listContainer = document.createElement('div'); 
    document.getElementsByTagName('body')[0].appendChild(listContainer);

    const pageHeader= document.createElement("h1");
    const text = document.createTextNode("The List of My Favorite Books");
    pageHeader.appendChild(text);
    listContainer.appendChild(pageHeader);

    const listElement = document.createElement("ul");
    listContainer.appendChild(listElement);

    for (let key in myFavoriteBooksObj) {

        let listItem = document.createElement('li');
        listElement.appendChild(listItem);

        let header = document.createElement('h2');
        header.innerHTML = myFavoriteBooksObj[key].title;
        listItem.appendChild(header);
        
        const images = document.createElement("img");
        images.setAttribute("src", myFavoriteBooksCover[key] )
        images.setAttribute("alt",key);
        listItem.appendChild(images);

        let book_author = document.createElement('h3');
        book_author.innerHTML = "Author: " + myFavoriteBooksObj[key].author;
        listItem.appendChild(book_author);

        let book_genre = document.createElement('h3');
        book_genre.innerHTML = "Genre : " + myFavoriteBooksObj[key].genre;
        listItem.appendChild(book_genre);

        let book_language = document.createElement('h3');
        book_language.innerHTML = "Language: " + myFavoriteBooksObj[key].language;
        listItem.appendChild(book_language);

        let book_published = document.createElement('h3');
        book_published.innerHTML = "First Published: " + myFavoriteBooksObj[key].firstPublished;
        listItem.appendChild(book_published);

    }
 }
 list_builder();

