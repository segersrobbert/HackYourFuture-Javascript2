'use strict';

{
// ----------------------------------1.1-----------------------------------
// Open the apps.js and start by declaring an array that contains 10 strings. 
// These strings should be of book titles you have read (or made up) 
// and be lowercase without spaces so that you can use these later as HTML id attributes. 
// (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
// Add a console.log statement to output this array to console. 
// (This is for debugging and making sure everything is in order. 
// Delete it later when you're done :))

  const bookTitles = [
    // Replace with your own book titles
    'kuyucaklı_yusuf',
    'madonna_in_a_fur_coat',
    'mahkemelerde',
    'masumiyet_müzesi',
    'bir_kedi_bir_adam_bir_ölüm',
    'son_ada',
    'serenad',
    'the_da_vinci_code',
    'endgame',
    'crime_and_punishment',
  ];
  // for(let i = 0; i<bookTitles.length; i++){
  //   const removeUnderscores = bookTitles[i].replace(/_/g, " ");
  // }
  
  //console.log(bookTitles);

  // -------------------------------1.3-------------------------------------
  // Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. 

  //-----------------SOLUTION---------------------
  // const createDiv = document.createElement("div");
  // createDiv.setAttribute("id", "newDiv");
  // const getBody = document.querySelector("body").appendChild(createDiv);
  // const ul = document.createElement("ul");
  // createDiv.appendChild(ul);
  // const createElement =()=>{
  //   for (let i = 0; i<bookTitles.length; i++){
  //     const li = document.createElement("li");
  //     ul.appendChild(li);
  //     li.innerText = bookTitles[i];
  //   }

  // }
  // createElement()

  


  // --------------------------1.4---------------------------
  // Make an object (not an array!) containing information for each book. 
  // Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, 
  // and at least the following properties: title, language and author.

  const infoBooks = {
    kuyucaklı_yusuf: {
      author: 'Sabahattin Ali',
      year: '1961',
      language: 'Turkish',
    },
    madonna_in_a_fur_coat: {
      author: 'Sabahattin Ali',
      year: '1959',
      language: 'Turkish',
    },
    mahkemelerde: {
      author: 'Sabahattin Ali',
      year: '1963',
      language: 'Turkish',
    },
    masumiyet_müzesi: {
      author: 'Zülfi Livaneli',
      year: '2015',
      language: 'Turkish',
    },
    bir_kedi_bir_adam_bir_ölüm: {
      author: 'Zülfi Livaneli',
      year: '2009',
      language: 'Turkish',
    },
    son_ada: {
      author: 'Zülfi Livaneli',
      year: '2003',
      language: 'Turkish',
    },
    serenad: {
      author: 'Zülfi Livaneli',
      year: '2010',
      language: 'Turkish',
    },
    the_da_vinci_code: {
      author: 'Dan Brown',
      year: 2004,
      language: 'English',
    },
    endgame: {
      author: 'Ahmet Altan',
      year: 2004,
      language: 'English',
    },
    crime_and_punishment: {
      author: 'Dosteyevski',
      year: 1866,
      language: 'Turkish',
    },
  };

  // --------------------------1.5---------------------------
  // Now change the function from step 1.3 that you used to display the book ID's in a list 
  // to take the actual information about the book from the object and display that. 
  // Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.

//-----------------SOLUTION---------------------
  // const createDiv = document.createElement("div");
  // createDiv.setAttribute("id", "newDiv");
  // const getBody = document.querySelector("body").appendChild(createDiv);
  // const ul = document.createElement("ul");
  // createDiv.appendChild(ul);
  // const keys = Object.keys(infoBooks);
  
  // const createElement =()=>{
  //   for (let i = 0; i<bookTitles.length; i++){
  //     const li = document.createElement("li");
  //     ul.appendChild(li);
  //     li.innerText = keys[i];
  //     //console.log(infoBooks[keys[i]])
  //   }

  // }
  // createElement()

  // --------------------------1.7---------------------------
  // Find and download book covers for each book and construct a new object which has as keys the book IDs again, 
  // and as value the path to the image source (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).

  const bookCovers = {
    kuyucaklı_yusuf: 'https://cdn.bkmkitap.com/kuyucakli-yusuf-547447-37-O.jpg',
    madonna_in_a_fur_coat:
      'https://images-na.ssl-images-amazon.com/images/I/41JuRZy6jlL._SX331_BO1,204,203,200_.jpg',
    mahkemelerde: 'https://motherinlondon.files.wordpress.com/2017/09/img_4782.jpg?w=293&h=391',
    masumiyet_müzesi: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Masmiyetmuzesi.jpg',
    bir_kedi_bir_adam_bir_ölüm: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000390208-1.jpg',
    son_ada: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000457487-1.jpg',
    serenad:
      'https://images-na.ssl-images-amazon.com/images/I/51b1emDMkrL._SX344_BO1,204,203,200_.jpg',
    the_da_vinci_code: 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg',
    endgame:
      'https://d243y1uga1q3sn.cloudfront.net/assets/files/302874/endgame-paperback-cover-9781782112617.jpg',
    crime_and_punishment: 'https://images.penguinrandomhouse.com/cover/9780553211757',
  };

  // --------------------------1.8---------------------------
  // Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). 
  // Then write a function which places an image at the corresponding li element.
  // Remember that objects are not ordered, so you cannot guarantee that the first key is the first li element. 
  // (Hint: you could give each li item an id tag by modifying the function you made before.)


  const createDiv = document.createElement("div");
  createDiv.setAttribute("id", "newDiv");
  const getBody = document.querySelector("body").appendChild(createDiv);
  const ul = document.createElement("ul");
  createDiv.appendChild(ul);
  const keys = Object.keys(infoBooks);
  const keysOfCovers = Object.keys(bookCovers);

  const createElement =()=>{
    for (let i = 0; i<bookTitles.length; i++){
      const li = document.createElement("li");
      li.setAttribute("id", keys[i])
      ul.appendChild(li);
      const h1 = document.createElement("h1");
      const removeUnderscores = keys[i].replace(/_/g, " ");
      h1.innerText = removeUnderscores;
      li.appendChild(h1);
      h1.style.color="#000"
      h1.style.textTransform="uppercase";

      const h2 = document.createElement("h2");
      h2.innerText =infoBooks[keys[i]].author;
      li.appendChild(h2);

      const h3 = document.createElement("h3");
      h3.innerText =infoBooks[keys[i]].year;
      li.appendChild(h3);

      const h4 = document.createElement("h4");
      h4.innerText =infoBooks[keys[i]].language;
      li.appendChild(h4);
      h4.style.fontStyle="italic"

      const createImg = document.createElement("img");
      createImg.setAttribute("src", bookCovers[keysOfCovers[i]]);
      createImg.setAttribute("alt", keysOfCovers[i]);
      li.appendChild(createImg);

    }

  }
  createElement()

  //additional things

  const newButton = document.createElement('button');
  const rootOfMain = document.querySelector('.wrapper').appendChild(newButton);
  newButton.setAttribute('id', 'see-more');
  newButton.innerHTML = 'Click to See Below!';
  newButton.style.margin = '2%';
  newButton.style.marginTop = '5%';
  newButton.style.background = '#112233';
  newButton.style.color = '#fff';
  newButton.style.padding = '1%';
  newButton.style.fontSize = '1.2rem';
  document.querySelector('html').style.scrollBehavior = 'smooth';

  newButton.addEventListener('click', () => {
    location.href = '#newDiv';
  });
  

}


//--------------------FIRST TRIAL--------------------------
//   const root = document.getElementById('newDiv');
//   const ul = document.createElement('ul');
//   root.appendChild(ul);
//   const keys = Object.keys(infoBooks);
//   function createList() {
//     //if you create li element or append ul to li here the elements changed. Attention!
//     for (let i = 0; i < keys.length; i++) {
//       const li = document.createElement('li');
//       li.setAttribute('id', [keys[i]]);
//       ul.appendChild(li);
//       const h1 = document.createElement('h1');
//       h1.innerText = infoBooks[keys[i]].author;
//       li.appendChild(h1);

//       const h2 = document.createElement('h2');
//       h2.innerText = infoBooks[keys[i]].year;
//       li.appendChild(h2);

//       const h4 = document.createElement('h4');
//       h4.innerText = infoBooks[keys[i]].language;
//       li.appendChild(h4);
//     }
//   }
//   createList();

//   const images = Object.keys(bookCovers);
//   function addImage() {
//     for (let i = 0; i < keys.length; i++) {
//       const img = document.createElement('img');
//       img.setAttribute('src', bookCovers[keys[i]]);
//       img.setAttribute('alt', keys[i]);
//       const newLi = document.getElementById(keys[i]).appendChild(img);
//     }
//   }
//   addImage();