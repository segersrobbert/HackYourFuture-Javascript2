'use strict';
  const bookTitles = [
    { 
    id: 'war_and_peace',
    title: 'War and Peace',
    language: 'English',
    author: 'Leo Tolstoy',
    },
    { 
    id: 'crime_and_punishment',
    title: 'Crime and Punishment',
    language: 'English',
    author: 'Fyodor Dostoevsky',
    },
    { 
    id: "alice's_adventures_in_wonderland",
    title: "Alice's Advantures in Wonderland",
    language: 'English',
    author: ' ‎Lewis Carroll',
    },
    { 
    id: 'pride_and_prejudice',
    title: 'Pride and Prejudice',
    language: 'English',
    author: 'Jane Austen',
    },
    { 
    id: 'anna_karenina',
    title: 'Anna Karerina',
    language: 'English',
    author: 'Leo Tolstoy',
    },
    { 
    id: 'nineteen_eighty_four',
    title: 'Nineteen Eighty Four',
    language: 'English',
    author: 'George Orwell',
    },
    { 
    id: 'harry_potter_chamber_secrets',
    title: 'Harry Potter Chamber Secrets',
    language: 'English',
    author: 'J. K. Rowling',
    },
    { 
    id: 'the_stranger',
    title: 'The Stranger',
    language: 'English',
    author: 'Albert Camus',
    },
    { 
    id: 'letters_to_milena',
    title: 'Letter to Milena',
    language: 'English',
    author: 'Franz Kafka',
    },
    { 
    id: 'my_sweet_orange_tree',
    title: 'My Sweet Orqange Tree',
    language: 'English',
    author: 'Jose Mauro De Vasconcelos',
    }
  ];
  //console.log('bookTitles')

  const listContainer = document.createElement('div');
document.body.appendChild(listContainer);

// Create h1 element
const h1 = document.createElement('h1');
const textH1 =  document.createTextNode("LIST OF MY FAVORITE BOOKS");
h1.appendChild(textH1);
h1.style.fontSize = '40px';
listContainer.appendChild(h1);
/* var listElement = document.createElement('ul');
h1.appendChild(listElement); 
var listItem = document.createElement('li');
h1.appendChild(listItem); 
listItem.style.listStyleType ='none';*/

  function createList() { 
  const numberOfListItems = bookTitles.length;
  for (var i = 0; i < numberOfListItems; i++) {
      const listItem = document.createElement('li');
      listItem.innerHTML = bookTitles[i].title;
      listItem.style.margin = '20px';
      listItem.style.fontSize = '30px';
      h1.appendChild(listItem);
      // Create p element
      const authorOfBooks = document.createElement('p');
      listItem.appendChild(authorOfBooks);
      authorOfBooks.innerHTML = 'Author of the book is' + ' ' + bookTitles[i].author;
      // Create img element
      const theImg = document.createElement('img');
      listItem.appendChild(theImg);
      theImg.src = 'imgs/' + bookTitles[i].id + '.jpeg';
      theImg.setAttribute('width', '15%')
  }
  return h1;
} 
document.body.append(createList());


