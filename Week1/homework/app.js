'use strict';

{
    // Replace with your own book titles
    const bookTitles = [

        'pride_and_prejudice',
        'animal_farm',
        'alice_in_wonderland',
        'the_last_leaf',
        'the_picture_of_dorian_gray',
        'hamlet',
        'madame_bovary',
        'canterbury_tales',
        'emma',
        'sense_and_sensibility'

    ];

    // Replace with your own code


}
// make an object

const myBookDetailsObj = {
    pride_and_prejudice: {
        title: 'Pride and Prejudice',
        language: 'English',
        author: 'Jane Austen',

    },

    animal_farm: {
        title: 'Animal Farm',
        language: 'English',
        author: 'George Orwell',

    },

    alice_in_wonderland: {
        title: 'Alice in Wonderland',
        language: 'English',
        author: 'Lewis Carrol',
    },

    the_last_leaf: {
        title: 'The Last Leaf',
        language: 'English',
        author: 'O.Henry',
    },

    the_picture_of_dorian_gray: {
        title: 'The Picure of Dorian Gray',
        language: 'English',
        author: 'Oscar Wilde',
    },

    hamlet: {
        title: 'Hamlet',
        language: 'English',
        author: 'William Shakespeare',
    },

    madame_bovary: {
        title: 'Madame Bovary',
        language: 'French',
        author: 'Gustave Flaubert',
    },

    canterbury_tales: {
        title: 'Canterbury Tales',
        language: 'English',
        author: 'Geoffrey Chaucer',
    },

    anna_karenina: {
        title: 'Anna Karenina',
        language: 'Russian',
        author: 'Leo Tolstoy',
    },

    sense_and_sensibility: {
        title: 'Sence and Sensibility',
        language: 'English',
        author: 'Jane Austen',
    }

};

const bookCoverImagesObj = {
    pride_and_prejudice: './assets/pride_and_prejudice.jpg',
    animal_farm: './assets/animal_farm.jpg',
    alice_in_wonderland: './assets/alice_in_wonderland.jpg',
    the_last_leaf: './assets/the_last_leaf.jpg',
    the_picture_of_dorian_gray: './assets/the_picture_of_dorian_gray.jpg',
    hamlet: './assets/hamlet.jpg',
    madame_bovary: './assets/madame_bovary.jpg',
    canterbury_tales: './assets/the_canterbury_tales.jpg',
    anna_karenina: './assets/anna_karenina.jpg',
    sense_and_sensibility: './assets/sense_and_sensibility.jpg'

}


function myFavouredBooks() {
    var bookContainer = document.createElement('h1');
    h1 = document.createTextNode('My Favoured Books');
    document.getElementsByTagName('body')[0].appendChild('h1');


    myBookTitles = document.createElement('ul');


    for (var key in myBookDetailsObj);

    const listItem = document.createElement('li');

    listElement.appendChild(listItem);
    const title = document.createElement('h2');
    header.innerHTML = myBookDetailsObj[key].title;
    myBookTitles.appendChild('title');

    const images = document.createElement("img");
    images.setAttribute("src", bookCoverImagesObj[key]);
    images.setAttribute("alt", key);
    listItem.appendChild(images);

    const author = document.createElement('h3');
    author.innerHTML = "Author: " + myBookDetailsObj[key].author;
    listItem.appendChild(author);

    const language = document.createElement('h3');
    language.innerHTML = "Language: " + myBookDetailsObj[key].language;
    listItem.appendChild(language);


};
