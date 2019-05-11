'use strict';

const booksObj = {
  how_to_train_your_dragon: {
    id: 'how_to_train_your_dragon',
    title: 'How To Train Your Dragon',
    author: 'Cressida Cowell',
  },
  the_sword_of_shannara: {
    id: 'the_sword_of_shannara',
    title: 'The Sword Of Shannara',
    author: 'Terry Brooks',
  },
  sherlock_holmes: {
    id: 'Sherlock_holmes',
    title: 'Sherlock Holmes',
    author: 'Sir Arthur Coan Doyle',
  },
  awaken_the_giant_within: {
    id: 'awaken_the_giant_within',
    title: 'Awaken The Giant',
    author: 'Tony Robbins',
  },
  born_survivor: {
    id: 'born_survivor',
    title: 'Born Survivor',
    author: 'Bear Grylls',
  },
  sapiens: {
    id: 'sapiens',
    title: 'Sapiens?',
    author: 'Yuval Noah Harari',
  },
  physics_of_impossible: {
    id: 'physics_of_impossible',
    title: 'Physics of Impossible',
    author: 'Michio Kaku',
  },
  always_looking_up: {
    id: 'always_looking_up',
    title: 'Always Looking UP',
    author: 'Michael J.Fox',
  },
  the_subtle_art_of_not_giving_a_fuck: {
    id: 'the_subtle_art_of_not_giving_a_fuck',
    title: 'The Subtle Art Of Not Giving A Fuck',
    author: 'Mark Manson'
  },
  becoming: {
    id: 'becoming',
    title: 'Becoming',
    author: 'Michelle Obama',
  }
};

//create a function

const myBooks = document.querySelector('.books');

//function to add a book at a time by taking the information from books array.

const addBook = book => {
  const listElement = document.createElement('li');
myBooks.appendChild(listElement);

const bookTitle = document.createElement('h2');
bookTitle.innerHTML = book.title;
listElement.appendChild(bookTitle)

//create image element
const booksCover = document.createElement('img');
booksCover.src = `./images${book.id}.jpg`;
// 
booksCover.alt = book.title;
listElement.appendChild(booksCover);
}
