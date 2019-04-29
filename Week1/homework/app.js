//'use strict';

{
  const books = {
    'feed_me_vegan': {
      title: 'Feed Me Vegan',
      author: 'Lucy Watson',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660591037'
    },
    'goodbye_things_on_minimalist_living': {
      title: 'Goodbye Things on Minimalist Living',
      author: 'Fumio Sasaki',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660601002'
    },
    'turning_the_tide_on_plastic': {
      title: 'Turning The Tide on Plastic',
      author: 'Lucy Siegle',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2662833090'
    },
    'how_to_give_up_plastic': {
      title: 'How to Give Up Plastic',
      author: 'Will McCallum',
      status: 'Wishlist',
      review: 'https://www.goodreads.com/book/show/38587839-how-to-give-up-plastics'
    },
    'unlocking_italian_with_paul_noble': {
      title: 'Unlocking Italian with Paul Noble',
      author: 'Paul Noble',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2683716195'
    },
    'wtf_should_i_eat': {
      title: 'Food: What the Heck Should I Eat?',
      author: 'Mark Hyman',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2762127902'
    },
    'the_basics_of_user_experience_design': {
      title: 'The Basics of User Experience Design',
      author: 'Mads Soegaard',
      status: 'Currently reading',
      review: 'https://www.goodreads.com/book/show/40408061-the-basics-of-user-experience-design'
    },
    'our_korean_kitchen': {
      title: 'Our Korean Kitchen',
      author: ['Jordan Bourke', ' Rejina Pyo'],
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2802308115'
    },
    'good_night_stories_for_rebel_girls': {
      title: 'Good Night Stories for Rebel Girls',
      author: ['Elena Favilli', ' Francesca Cavallo'],
      status: 'Currently reading',
      review: 'https://www.goodreads.com/review/show/2802308415'
    },
    'the_girl_who_takes_an_eye_for_an_eye': {
      title: 'The Girl Who Takes an Eye for an Eye',
      author: 'David Lagercrantz',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2272703977'
    }
  };


  const myBooks = document.querySelector('.books');
  const myBook = document.getElementsByClassName('book');

  const addBook = () => {
    for (const book in books) {
      const createListElement = document.createElement('li');
      myBooks.appendChild(createListElement);

      const createBookTitle = document.createElement('h1');
      createBookTitle.innerHTML = books[book].title;
      createBookTitle.className = "bookTitle";
      createListElement.appendChild(createBookTitle);


      const createBookCover = document.createElement('img');
      createBookCover.src = `./assets/${book}.jpg`;
      createBookCover.alt = books[book].title;
      createListElement.appendChild(createBookCover);

      const createAuthor = document.createElement('span');
      createAuthor.innerHTML = 'Author: ' + books[book].author;
      createListElement.appendChild(createAuthor);

      const createStatusReading = document.createElement('span');
      createStatusReading.innerHTML = 'Status: ' + books[book].status;
      createListElement.appendChild(createStatusReading);

      const createReviewLink = document.createElement('a');
      createReviewLink.href = books[book].review;
      createReviewLink.target = "_blank";
      createReviewLink.innerHTML = 'My Review';
      createListElement.appendChild(createReviewLink);

      console.log(`book.${book}`);
      console.log(books[book].author);
      console.log(books[book].title);
    }
  }
  addBook();
}