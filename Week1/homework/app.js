'use strict';

  // This is an array that stores my books' information.
  // Each element is an object that contains details.
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

// This function is used by compare(), the task is to set the "status" priority.
// I want "Read" comes first, then "Currently reading" and "Wishlist"
// come after. This function returns number.
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

// This function is used by sort().
// Basically compare() returns negative, 0, and positive numbers.
// If 0 or negative is returned, order is preserved.
function compare(a, b){

  // First I sort by rating, if they are different..
  if(a.rating !== b.rating){

    // Make sure a book that has higher ranking is placed first.
    return (b.rating || 0) - (a.rating || 0);

  }else{
    //... and if the ratings are the same, sort by status
    // In this case, I wanted to sort in order of "Currently reading" and "Wishlist"
    // It converts the status into a number and compares those.
    return getStatusPriority(a.status) - getStatusPriority(b.status);
  }

}
const myBooks = document.querySelector('.books');

// I tried using filter(),
// Result: not showing all the books I have.
// It's handy if you want to only show the filtered books
// const rankedBooks = books.filter(book => book.rating > 5 || book.rating === undefined);

// Keep in mind that sort() only works for sorting an array, not an object.
// We need to explain to the sort method how the objects need to be sorted using
// a compare function.
const sortedBooks = books.sort(compare);

// This function to add a book at a time by taking the information from my books array.
const addBook = book => {
  const listElement = document.createElement('li');
  myBooks.appendChild(listElement);

  const bookTitle = document.createElement('h2');
  bookTitle.innerHTML = book.title;
  listElement.appendChild(bookTitle);

  const bookCover = document.createElement('img');
  bookCover.src = `./assets/${book.id}.jpg`;
  // Always fill your alt (for accessibility and as fallback if the image doesn't load)
  bookCover.alt = book.title;
  listElement.appendChild(bookCover);

  // This detailContainer is a div. I'm using for wrapping/grouping my detail elements into a block.
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
  // If you click, it brings you to a new tab.
  reviewLink.target = '_blank';

  // Not all the books mentioned have been read.
  // to show the difference between "My Review" (I wrote it myself)
  // and "Reviews" (bunch of reviews from Goodreads)
  if (book.status === 'Read') {
    reviewLink.innerHTML = 'My Review';
  } else {
    reviewLink.innerHTML = 'Reviews';
  }

  detailContainer.appendChild(reviewLink);

  //After showing "My Review" in a form of a link. I thought it would have easier to read my data by giving it a rating. So I want to show the ratings for the books I have read.
  //I could just add innerHTML by adding directly the star emojis.. but.. there's repeat() method. Why not?
  const convertRatingToStars = rating => {
    const star = '⭐';
    //repeat() is basically repeating my star emoji by my rating.
    return star.repeat(rating);
  };

  const bookRating = document.createElement('span');
  bookRating.innerHTML = convertRatingToStars(book.rating);

  // I need to give this span a class name, so I can style my star in CSS.
  bookRating.className = 'rating';
  detailContainer.appendChild(bookRating);
};

// last but not least, calling my function, so you can see it on the browser :)
// since I have an array, so I use for...of in the statement
// I could use (const book of books) means I'm taking directly to my books array.
// Since I've sorted my array, so I'm taking it from "sortedBooks".
for (const book of sortedBooks) {
  addBook(book);
}
