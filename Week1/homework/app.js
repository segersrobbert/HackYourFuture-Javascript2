'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
     'les_cerises_de_salomon',
    'kathrine_the_shrew',
    'autre_choix',
    'the_dog_and_the_bone',
    'six_tales_from_shakesphere',
    'fairy_tale_story',
    'she_stoop_to_conquer',
    'shylock',
    'the_owl_and_the_pussycat',
    'the_quick_brown_fox'
  
  ];

  // Replace with your own code
  
   var newUl = document.createElement('ul')
  bookTitles.forEach(book => {
    var listItem = document.createElement("li");
    var itemText = document.createTextNode(book);
    listItem.appendChild(itemText);
    newUl.appendChild(listItem)
  })
  document.body.appendChild(newUl)
  //create Object of books
  book1= {
 title: 'les_cerises_de_salomon',
 language: 'french',
 Author: 'Claude Raucy',
  };
  book2={
    title: 'kathrine_the_shrew',
    language: 'english',
    author: 'shakespeare',
  };
  book3= {
    title: 'autre_choix',
    language: 'french',
    author: 'forgot',
  };
  book4= {
    title: 'the_dog_and_the_bone',
    language: 'english',
    author: 'forgot',
  }
  book5={
    title: 'six_tales_from_shakespeare',
    language: 'english',
    author: 'shakespeare',
  };
  book5= {
    title: 'fairy_tale_story',
    language:'english',
    author: 'anonymous',
  };
  book6= {
    title: 'she_stoop_to_conquer',
    language: 'english',
    author: 'forgot',
  };
  book8={
    title: 'shylock',
    language: 'english',
    author: 'shakespeare',
  };
  book9= {
    title: 'the_owl_and_the_pussycat',
    language: 'english',
    author: 'anonymous',
  };
  book10= {
    title: 'the_quick_brown_fox',
    language: 'english',
    author: 'anonymous',
  };
  // object of images

    les_cerises_de_salomon: {

      image:'./image/les_cerises_de_salomon.jpg'
    };

    kathrine_the_shrew:  {
      image:'./image/ kathrine_the_shrew.jpg'      
    };

    autre_choix: {

    image:'./image/autre_choix.jpg' 
    };
  the_dog_and_the_bone: {
    image:'./image/the_dog_and_the_bone.jpg' 
  }
  six_tales_from_shakesphere: {
    image:'./image/six_tales_from_shakesphere.jpg'
  }
  fairy_tale_story :{
    image: './image/ fairy_tale_story.jpg'
  }
  she_stoops_to_conquer: {
    image:'./image/she_stoops_to_conquer.jpg'
  }
  shylock: {
    image:'./image/shylock.jpg'
  } 
  he_owl_and_the_pussycat: {
    image:'./image/the_owl_and_the_pussycat.jpg'
  }
  the_quick_brown_fox: {
    image:'./image/the_quick_brown_fox.jpg'

    } 
  }
 
}

