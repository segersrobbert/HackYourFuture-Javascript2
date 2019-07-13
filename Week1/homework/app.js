'use strict';

{
  // Data
  let myBooks = {
    Everything_We_Give: {
      "title": "Everything We Give",
      "language": "English",
      "author": "Khali.P",
      "photo": "images\\Every_thing_WeGive.jpg"
    },
    Girls_on_the_Line: {
      "title": "Girls on the Line",
      "language": "English",
      "author": "Aimie K. Runyan",
      "photo": "images\\Girls_on _the_Line.jpg"
    },
    The_Memory_of_Us: {
      "title": "The Memory of Us",
      "language": "English",
      "author": "Paul Corner",
      "photo": "images\\The_Memory_of_Us.jpg"
    },
    The_Good_Neighbor: {
      "title": "The Good Neighbor",
      "language": "English",
      "author": "A. J. Banner",
      "photo": "images\\The_Good_Neighbor.jpg"
    },
    Hello_Love: {
      "title": "Hello Love",
      "language": "Engihs",
      "author": "Karen McQuestion",
      "photo": "images\\Hello_Love.jpg"
    },
    Good_Man_Dalton: {
      "title": "Good Man Dalton",
      "language": "English",
      "author": "Karen McQuestion",
      "photo": "images\\Good_Man_Dalton.jpg"
    },
    Loving_Liberty_Levine: {
      "title": "Loving Liberty Levine",
      "language": "English",
      "author": "Colin Falconer",
      "photo": "images\\Loving_Liberty_Levine.jpg"
    },
    Confidential: {
      "title": "Confidential",
      "language": "English",
      "author": "Ellie Monago",
      "photo": "images\\Confidential.jpg"
    },
    Eloquent_JavaScript: {
      "title": "Eloquent JavaScript",
      "language": "English",
      "author": "Marijn Haverbeke",
      "photo": "images\\Eloquent_JavaScript.jpg"
    },
    JavaScript_Programming: {
      "title": "JavaScript Programming",
      "language": "Enlgish",
      "author": "Brian Jenkins",
      "photo": "images\\JavaScript_Programming.jpg"
    }
  }

  //header div
  let header1 = document.createElement('h1');
  let headerTitle = document.createTextNode("My Favourite Books");
  header1.appendChild(headerTitle);
  document.body.appendChild(header1);

  let headerContainer = document.createElement('div');
  headerContainer.id = 'header_container';

  document.body.appendChild(headerContainer);
  headerContainer.appendChild(header1);


  // Main Section
  let mainSection = document.createElement('div');
  mainSection.id = 'main_section';

  document.body.appendChild(mainSection);


  // Functions for main section

 
  function bookList() {
    var ul = document.createElement('ul');
    mainSection.appendChild(ul);
    for (const books in myBooks) {
      var ol = document.createElement('ol');
      var liTitle = document.createElement('li');
      var liImg = document.createElement('li')
      var img = document.createElement("img");
      img.src = myBooks[books].photo;
      var liLanguage = document.createElement('li');
      var liAuthor = document.createElement('li');

      var nodeTextTitle = document.createTextNode(myBooks[books].title);
      var nodeTextLanguage = document.createTextNode("Language: " + myBooks[books].language);
      var nodeTextAuthor = document.createTextNode("Author: " + myBooks[books].author);

      liTitle.appendChild(nodeTextTitle);
      liImg.appendChild(img);
      liLanguage.appendChild(nodeTextLanguage);
      liAuthor.appendChild(nodeTextAuthor);

      ol.appendChild(liTitle);
      ol.appendChild(liImg)
      ol.appendChild(liLanguage);
      ol.appendChild(liAuthor);
      ul.appendChild(ol)
    }
  }

  // Call the Function
  bookList();
 

  //Footer
  let footer = document.createElement('footer');4
  footer.innerHTML = "Conact me for more books: aimal @gmail.com";
  document.body.appendChild(footer);

}
