'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'brave_new_world',
    'the_moonstone',
    'little_women',
    'three_men_in_boat',
    'the_sign_of_four',
    'new_grub_street',
    'jude_the_obscure',
    'heart_of_darkness',
    'sister_carrie',
    'the_rainbow',
  ];

  const bookData = {
    brave_new_world: {
      title: 'Brave new world',
      author: 'Aldous Huxley',
      language: 'English',
      image: './images/brave_new_world.jpg',
    },
    the_moonstone: {
      title: 'The moonstone',
      author: 'Wilkie Collins',
      language: 'Italian',
      image: './images/the_moonstone.jpg',
    },
    little_women: {
      title: 'Little women',
      author: 'Louisa May Alcott',
      language: 'French',
      image: './images/little_women.jpg',
    },
    three_men_in_boat: {
      title: 'Three men in a boat',
      author: 'Jerome K Jerome',
      language: 'English',
      image: './images/three_men_in_boat.jpg',
    },
    the_sign_of_four: {
      title: 'The sign of four',
      author: 'Arthur Conan Doyle',
      language: 'French',
      image: './images/the_sign_of_four.jpg',
    },
    new_grub_street: {
      title: 'New grub street',
      author: 'George Gissing',
      language: 'English',
      image: './images/new_grub_street.jpg',
    },
    jude_the_obscure: {
      title: 'Jude the obscure',
      author: 'Thomas Hardy',
      language: 'Dutch ',
      image: './images/jude_the_obscure.jpg',
    },
    heart_of_darkness: {
      title: 'Heart of darkness',
      author: 'Joseph Conrad',
      language: 'Turkish',
      image: './images/heart_of_darkness.jpg',
    },
    sister_carrie: {
      title: 'Sister carrie',
      author: 'Theodore Dreiser',
      language: 'English',
      image: './images/sister_carrie.jpg',
    },
    the_rainbow: {
      title: 'The rainbow',
      author: 'DH Lawrence',
      language: 'Spanish',
      image: './images/the_rainbow.jpg',
    },
  };

  // Replace with your own code
  function book_data() {
    const book_ul = document.createElement('ul');

    for (let i in bookTitles) {
      const book_li = document.createElement('li');
      const book_title = document.createElement('h1');
      const book_author = document.createElement('p');
      const book_language = document.createElement('p');
      const book_cover = document.createElement('img');
      book_title.innerHTML = bookData[bookTitles[i]].title;
      book_author.innerHTML = bookData[bookTitles[i]].author;
      book_language.innerHTML = bookData[bookTitles[i]].language;
      book_cover.src = bookData[bookTitles[i]].image;
      book_li.appendChild(book_cover);
      book_li.appendChild(book_title);
      book_li.appendChild(book_author);
      book_li.appendChild(book_language);
      book_ul.appendChild(book_li);
    }
    document.body.appendChild(book_ul);
  }

  book_data();
}
