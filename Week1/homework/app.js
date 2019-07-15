'use strict';

{
  //creating an array that contain strings of book names
  const bookTitles = [
    'the_mystery_on_the_mountain_parbat',
    'de_peetvader',
    'hunger_games_1',
    'hunger_games_mockingjay',
    'miserables',
    'improbable',
    'duc_man',
    'under_ocean',
    'da_vinci_code',
    '5th_horseman',
  ];

  /* 
  //creatin' a function that generates an ul with li elements in a loop
  function createUl(bookTitles) {
    var division = document.createElement('div');
    division.setAttribute('id', 'bookList');
    var titleHeader = document.createElement('h1');
    titleHeader.appendChild(document.createTextNode('The List of The Books'));
    division.appendChild(titleHeader);

    var ul = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
      var li = document.createElement('li');
      var text = document.createElement('p');
      text.appendChild(document.createTextNode(bookTitles[i]));
      li.appendChild(text);
      li.setAttribute('id', 'book_' + bookTitles[i]);
      ul.appendChild(li);
    }
    division.appendChild(ul);
    return division;
  }
  document.body.appendChild(createUl(bookTitles));
  */

  //making an object containing book information and including nested objects
  let bookInfos = {};
  for (let i = 0; i < bookTitles.length; i++) {
    let j = bookTitles[i];

    if (i === 0) {
      bookInfos[j] = {
        title: 'The Mystery on the mountain Parbat',
        language: 'Turks',
        author: 'Gulten Dayıoglu',
      };
    } else if (i === 1) {
      bookInfos[j] = {
        title: 'De Peetvader',
        language: 'Dutch',
        author: 'Mario Puzo',
      };
    } else if (i === 2) {
      bookInfos[j] = {
        title: 'Hunger Games 1',
        language: 'English',
        author: 'Suzanne Collins',
      };
    } else if (i === 3) {
      bookInfos[j] = {
        title: 'Hunger Games Mockingjay',
        language: 'English',
        author: 'Suzanne Collins',
      };
    } else if (i === 4) {
      bookInfos[j] = {
        title: 'Miserables',
        language: 'English',
        author: 'Victor Hugo',
      };
    } else if (i === 5) {
      bookInfos[j] = {
        title: 'Improbable',
        language: 'English',
        author: 'Adam Fawer',
      };
    } else if (i === 6) {
      bookInfos[j] = {
        title: 'Duc Man',
        language: 'English',
        author: 'Viollet Le Duc',
      };
    } else if (i === 7) {
      bookInfos[j] = {
        title: 'Under Ocean',
        language: 'English',
        author: 'Jules Verne',
      };
    } else if (i === 8) {
      bookInfos[j] = {
        title: 'Da Vinci Code',
        language: 'Turkish',
        author: 'Dan Brown',
      };
    } else if (i === 9) {
      bookInfos[j] = {
        title: '5th Horseman',
        language: 'English',
        author: 'James Patterson, Maxine Paetro',
      };
    }
  }
  console.log(bookInfos);

  /*
  //making another function using the object to write information about book to html body div using related element
  function createObjectElements(bookInfos) {
    var div = document.createElement('div');
    div.setAttribute('id', 'bookInfo');
    var titleHeader2 = document.createElement('h1');
    titleHeader2.appendChild(document.createTextNode('Information about The Books'));
    div.appendChild(titleHeader2);
    for (let i = 0; i < 10; i++) {
      var sec = document.createElement('section');
      sec.setAttribute('class', 'bookInfoItem');
      var header = document.createElement('h2');
      header.appendChild(
        document.createTextNode('The title of the book is ' + bookInfos[bookTitles[i]].title),
      );
      sec.appendChild(header);

      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode('The language of the book is ' + bookInfos[bookTitles[i]].language),
      );
      sec.appendChild(p);

      var p2 = document.createElement('p');
      p2.appendChild(
        document.createTextNode('The author of the book is ' + bookInfos[bookTitles[i]].author),
      );
      sec.appendChild(p2);
      div.appendChild(sec);
    }
    return div;
  }
  document.body.appendChild(createObjectElements(bookInfos));
  */

  const imgObject = {
    the_mystery_on_the_mountain_parbat: './img/parbat.jpg',
    de_peetvader: './img/peetvader.jpg',
    hunger_games_1: './img/hunger games 1.jpg',
    hunger_games_mockingjay: './img/hunger_games_mockingjay.jpg',
    miserables: './img/miserables.jpg',
    improbable: './img/improbable.jpg',
    duc_man: './img/duc_man.jpg',
    under_ocean: './img/under_ocean.jpg',
    da_vinci_code: './img/da_vinci_code.jpg',
    '5th_horseman': './img/5th_horseman.jpg',
  };
  //Looping over imgObject to get the keys(book names)
  var objectKeys = Object.keys(imgObject);

  //combining the functions
  function createObjectElements(bookInfos) {
    var div = document.createElement('div');
    div.setAttribute('id', 'bookInfo');
    var titleHeader = document.createElement('h1');
    titleHeader.appendChild(document.createTextNode('Information about The Books'));
    div.appendChild(titleHeader);

    var ul = document.createElement('ul');

    for (let i = 0; i < bookTitles.length; i++) {
      var li = document.createElement('li');
      li.setAttribute('id', 'book_' + bookTitles[i]);

      var header = document.createElement('h2');
      header.appendChild(document.createTextNode(bookInfos[bookTitles[i]].title));
      li.appendChild(header);

      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode(
          'The language of the book is: ' + bookInfos[bookTitles[i]].language,
        ),
      );
      li.appendChild(p);

      var p2 = document.createElement('p');
      p2.appendChild(
        document.createTextNode('The author of the book is: ' + bookInfos[bookTitles[i]].author),
      );
      li.appendChild(p2);

      var imgs = document.createElement('img');
      imgs.src = imgObject[objectKeys[i]];
      imgs.alt = objectKeys[i];
      li.appendChild(imgs);
      ul.appendChild(li);
    }
    div.appendChild(ul);
    return div;
  }
  document.body.appendChild(createObjectElements(bookInfos));

  //making an object containing paths to the related images

  //writing a function to add img sources to li items
  /*function imgAssingToLi() {
    for (let j in objectKeys) {
      var imgs = document.createElement('img');
      imgs.src = imgObject[objectKeys[j]];
      imgs.alt = objectKeys[j];
      document.getElementById('book_' + bookTitles[j]).appendChild(imgs);
    }
    return;
  }
  imgAssingToLi();*/
}
