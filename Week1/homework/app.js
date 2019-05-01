'use strict';


  const books = [
    {
      id: 'feed_me_vegan',
      title: 'Feed Me Vegan',
      author: 'Lucy Watson',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660591037',
      rating: 3
    },
    {
      id: 'goodbye_things_on_minimalist_living',
      title: 'Goodbye Things on Minimalist Living',
      author: 'Fumio Sasaki',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2660601002',
      rating: 5
    },
    {
      id: 'turning_the_tide_on_plastic',
      title: 'Turning The Tide on Plastic',
      author: 'Lucy Siegle',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2662833090',
      rating: 4
    },
    {
      id: 'how_to_give_up_plastic',
      title: 'How to Give Up Plastic',
      author: 'Will McCallum',
      status: 'Wishlist',
      review: 'https://www.goodreads.com/book/show/38587839-how-to-give-up-plastics',
    },
    {
      id: 'unlocking_italian_with_paul_noble',
      title: 'Unlocking Italian with Paul Noble',
      author: 'Paul Noble',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2683716195',
      rating: 2
    },
    {
      id: 'wtf_should_i_eat',
      title: 'Food: What the Heck Should I Eat?',
      author: 'Mark Hyman',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2762127902',
      rating: 3
    },
    {
      id: 'the_basics_of_user_experience_design',
      title: 'The Basics of User Experience Design',
      author: 'Mads Soegaard',
      status: 'Currently reading',
      review: 'https://www.goodreads.com/book/show/40408061-the-basics-of-user-experience-design'
    },
    {
      id: 'our_korean_kitchen',
      title: 'Our Korean Kitchen',
      author: ['Jordan Bourke', ' Rejina Pyo'],
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2802308115',
      rating: 4
    },
    {
      id: 'good_night_stories_for_rebel_girls',
      title: 'Good Night Stories for Rebel Girls',
      author: ['Elena Favilli', ' Francesca Cavallo'],
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2802308415',
      rating: 4
    },
    {
      id: 'the_girl_who_takes_an_eye_for_an_eye',
      title: 'The Girl Who Takes an Eye for an Eye',
      author: 'David Lagercrantz',
      status: 'Read',
      review: 'https://www.goodreads.com/review/show/2272703977',
      rating: 4
    }
  ];
function getStatusPriority(status){
  switch (status) {
    case 'Read':
      return 1;
    case 'Currently reading':
      return 2;
    case 'Wishlist':
      return 3;
    default: return 0;
  }
}
function compare(a, b){
  if(a.rating === b.rating){
    return getStatusPriority(a.status) - getStatusPriority(b.status);
  }else{
    return (b.rating || 0) - (a.rating || 0);
  }

}
  const myBooks = document.querySelector('.books');
  //const rankedBooks = books.filter(book => book.rating > 5 || book.rating === undefined);
const sortedBooks = books.sort(compare);
  const addBooks = () => {
    for (const book of sortedBooks) {
      const listElement = document.createElement('li');
      myBooks.appendChild(listElement);

      const bookTitle = document.createElement('h2');
      bookTitle.innerHTML = book.title;
      bookTitle.className = 'bookTitle';
      listElement.appendChild(bookTitle);

      const bookCover = document.createElement('img');
      bookCover.src = `./assets/${book.id}.jpg`;
      bookCover.alt = book.title;
      listElement.appendChild(bookCover);

      const detailContainer = document.createElement('div');
      listElement.appendChild(detailContainer);

      const author = document.createElement('span');
      author.innerHTML = 'Author: ' + book.author;
      detailContainer.appendChild(author);

      const statusReading = document.createElement('span');
      statusReading.innerHTML = 'Status: ' + book.status;
      detailContainer.appendChild(statusReading);

      const reviewLink = document.createElement('a');
      reviewLink.href = book.review;
      reviewLink.target = '_blank';
      if (book.status === 'Read') {
        reviewLink.innerHTML = 'My Review';
      } else {
        reviewLink.innerHTML = 'Reviews';
      }

      detailContainer.appendChild(reviewLink);

      const convertRatingToStars = rating => {
        const star = '⭐';
        return star.repeat(rating);
      };

      const bookRating = document.createElement('span');
      bookRating.innerHTML = convertRatingToStars(book.rating);
      bookRating.className = 'rating';
      detailContainer.appendChild(bookRating);
    }
  };
  addBooks();
