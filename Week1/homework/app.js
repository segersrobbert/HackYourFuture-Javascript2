'use strict';

{
  const books = {
    'feed_me_vegan': {
      title: 'Feed Me Vegan',
      author: 'Lucy Watson',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660591037',
      rating: 3
    },
    'goodbye_things_on_minimalist_living': {
      title: 'Goodbye Things on Minimalist Living',
      author: 'Fumio Sasaki',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660601002',
      rating: 5
    },
    'turning_the_tide_on_plastic': {
      title: 'Turning The Tide on Plastic',
      author: 'Lucy Siegle',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2662833090',
      rating: 4
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
      review: 'https://www.goodreads.com/review/show/2683716195',
      rating: 2
    },
    'wtf_should_i_eat': {
      title: 'Food: What the Heck Should I Eat?',
      author: 'Mark Hyman',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2762127902',
      rating: 3
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
      review: 'https://www.goodreads.com/review/show/2802308115',
      rating: 4
    },
    'good_night_stories_for_rebel_girls': {
      title: 'Good Night Stories for Rebel Girls',
      author: ['Elena Favilli', ' Francesca Cavallo'],
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2802308415',
      rating: 4
    },
    'the_girl_who_takes_an_eye_for_an_eye': {
      title: 'The Girl Who Takes an Eye for an Eye',
      author: 'David Lagercrantz',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2272703977',
      rating: 4
    }
  };

  const myBooks = document.querySelector('.books');


  const addBook = () => {
    for (const book in books) {
      const listElement = document.createElement('li');
      myBooks.appendChild(listElement);

      const bookTitle = document.createElement('h2');
      bookTitle.innerHTML = books[book].title;
      bookTitle.className = "bookTitle";
      listElement.appendChild(bookTitle);

      const bookCover = document.createElement('img');
      bookCover.src = `./assets/${book}.jpg`;
      bookCover.alt = books[book].title;
      listElement.appendChild(bookCover);

      const detailContainer = document.createElement('div');
      listElement.appendChild(detailContainer);

      const author = document.createElement('span');
      author.innerHTML = 'Author: ' + books[book].author;
      detailContainer.appendChild(author);

      const statusReading = document.createElement('span');
      statusReading.innerHTML = 'Status: ' + books[book].status;
      detailContainer.appendChild(statusReading);

      const reviewLink = document.createElement('a');
      reviewLink.href = books[book].review;
      reviewLink.target = "_blank";
      if (books[book].status === 'Read') {
        reviewLink.innerHTML = 'My Review';
      } else {
        reviewLink.innerHTML = 'Reviews';
      }

      detailContainer.appendChild(reviewLink);

      const convertRatingToStars = (rating) => {
        const star = '⭐';
        return star.repeat(rating);
      };

      const bookRating = document.createElement('span');
      bookRating.innerHTML = convertRatingToStars(books[book].rating);
      bookRating.className = "rating";
      detailContainer.appendChild(bookRating);


    }
  }
  addBook();
}