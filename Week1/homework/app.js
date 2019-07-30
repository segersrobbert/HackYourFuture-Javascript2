'use strict';
{
  // Replace with your own book titles
  var bookTitles = [
    'universe_at_your_fingertips',
    'emile_or_on_education',
    'my_name_is_red',
    'noise',
    'centuries_of_childhood',
    'not_for_profit',
    'how_the_soldiers_play_gramophone ',
    'the_ignorant_schoolmaster',
    'school_blues',
    'cleverlands',
  ];
  var bookInformation = {
    universe_at_your_fingertips: {
      title: 'The Universe at Your Fingertips',
      author: 'Christophe Galfard',
      language: 'Turkish',
    },
    emile_or_on_education: {
      title: 'Emile or on Education',
      author: 'Jean-Jacques Rousseau',
      language: 'English',
    },
    my_name_is_red: {
      title: 'My Name is Red',
      author: 'Orhan Pamuk',
      language: 'English',
    },
    noise: {
      title: 'Noise:A Human History',
      author: 'David Hendy',
      language: 'English',
    },
    centuries_of_childhood: {
      title: 'Centuries of Childhood',
      author: 'Philippe Aries',
      language: 'English',
    },
    not_for_profit: {
      title: 'Not for profit:Why Democracy Needs the Humanities',
      author: 'Martha Nussbaum',
      language: 'English',
    },
    how_the_soldiers_play_gramophone: {
      title: 'How the Soldiers Play Gramophone',
      author: 'Sasa Stanisic',
      language: 'English',
    },
    the_ignorant_schoolmaster: {
      title: 'The Ignorant Schoolmaster',
      author: 'Jacques Rancière',
      language: 'English',
    },
    school_blues: {
      title: 'School Blues',
      author: 'Daniel Pennac',
      language: 'English',
    },
    cleverlands: {
      title: 'Cleverlands: The Secrets Behind the Success of the World’s Education Superpowers',
      author: 'Lucy Crehan',
      language: 'English',
    },
  };
  var bookCoverImages = {
    universe_at_your_fingertips: './images/evren_avucunda.jpg',
    emile_or_on_education: './images/emile_or_on_education.jpg',
    my_name_is_red: './images/my_name_is_red.jpg',
    noise: './images/noise.jpg',
    centuries_of_childhood: './images/centuries_of_childhood.jpg',
    not_for_profit: './images/not_for_profit.jpg',
    how_the_soldiers_play_gramophone: './images/how_the_soldiers_play_gramophone.jpg',
    the_ignorant_schoolmaster: './images/the_ignorant_schoolmaster.jpg',
    school_blues: './images/school_blues.jpg',
    cleverlands: './images/cleverland.jpg',
  };

  function book_info() {
    const pageHeader = document.createElement('h1');
    pageHeader.innerHTML = 'My Recent Books';
    document.body.appendChild(pageHeader);

    let newUl = document.createElement('ul');
    document.body.appendChild(newUl);

    for (let key in bookInformation) {
      let newLi = document.createElement('li');
      newLi.id = bookInformation[key];
      newUl.appendChild(newLi);

      let newImg = document.createElement('img');
      newImg.setAttribute('src', bookCoverImages[key]);
      newLi.appendChild(newImg);

      let newH2 = document.createElement('h2');
      newH2.innerHTML = bookInformation[key].title;
      newLi.appendChild(newH2);

      let newPara1 = document.createElement('p');
      newPara1.innerHtml = 'The book is written by ' + bookInformation[key].author;
      newLi.appendChild(newPara1);

      let newPara2 = document.createElement('p');
      newPara2.innerHTML = 'It is written in ' + bookInformation[key].language;
      newLi.appendChild(newPara2);
    }
  }

  book_info();
}
