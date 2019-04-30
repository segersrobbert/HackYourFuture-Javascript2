'use strict';

{
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
  //console.log(bookTitles);

  //Task 1.3
  /*
const ul = document.createElement("ul");
const appendUlToDiv = document.getElementById("newDiv");
appendUlToDiv.appendChild(ul);
function createList () {
for (let i=0; i<bookTitles.length; i++){
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText=bookTitles[i];
}
} 
createList()
*/

  const infoBooks = {
    kuyucaklı_yusuf: {
      author: 'Sabahattin Ali',
      year: '1960s',
      language: 'Turkish',
    },
    madonna_in_a_fur_coat: {
      author: 'Sabahattin Ali',
      year: '1960s',
      language: 'Turkish',
    },
    mahkemelerde: {
      author: 'Sabahattin Ali',
      year: '1960s',
      language: 'Turkish',
    },
    masumiyet_müzesi: {
      author: 'Zülfi Livaneli',
      year: 'unknown',
      language: 'Turkish',
    },
    bir_kedi_bir_adam_bir_ölüm: {
      author: 'Zülfi Livaneli',
      year: 'unknown',
      language: 'Turkish',
    },
    son_ada: {
      author: 'Zülfi Livaneli',
      year: 'unknown',
      language: 'Turkish',
    },
    serenad: {
      author: 'Zülfi Livaneli',
      year: 'unknown',
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

  const bookCovers = {
    kuyucaklı_yusuf: 'https://cdn.bkmkitap.com/kuyucakli-yusuf-547447-37-O.jpg',
    madonna_in_a_fur_coat: 'https://images-na.ssl-images-amazon.com/images/I/41JuRZy6jlL._SX331_BO1,204,203,200_.jpg',
    mahkemelerde: 'https://motherinlondon.files.wordpress.com/2017/09/img_4782.jpg?w=293&h=391',
    masumiyet_müzesi:
      'https://upload.wikimedia.org/wikipedia/en/b/b1/Masmiyetmuzesi.jpg',
    bir_kedi_bir_adam_bir_ölüm: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000390208-1.jpg',
    son_ada:
      'https://i.dr.com.tr/cache/600x600-0/originals/0000000457487-1.jpg',
    serenad:
      'https://images-na.ssl-images-amazon.com/images/I/51b1emDMkrL._SX344_BO1,204,203,200_.jpg',
    the_da_vinci_code: 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg',
    endgame:
      'https://d243y1uga1q3sn.cloudfront.net/assets/files/302874/endgame-paperback-cover-9781782112617.jpg',
    crime_and_punishment: 'https://images.penguinrandomhouse.com/cover/9780553211757',
  };

  
  const root = document.getElementById('newDiv');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  const keys = Object.keys(infoBooks);
  function createList() {
    //if you create li element or append ul to li here the elements changed. Attention!
    for (let i = 0; i < keys.length; i++) {
      const li = document.createElement('li');
      li.setAttribute("id", [keys[i]]);
      ul.appendChild(li);
      const h1 = document.createElement('h1');
      h1.innerText = infoBooks[keys[i]].author;
      li.appendChild(h1);

      const h2 = document.createElement('h2');
      h2.innerText = infoBooks[keys[i]].year;
      li.appendChild(h2);

      const h4 = document.createElement('h4');
      h4.innerText = infoBooks[keys[i]].language;
      li.appendChild(h4);
      
    }
  }
  createList();
 

  

  const images = Object.keys(bookCovers);
  function addImage(){
    for (let i = 0; i < keys.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", bookCovers[keys[i]]);
      img.setAttribute("alt", keys[i]);
      const newLi = document.getElementById(keys[i]).appendChild(img);
      
    }


  }
  addImage();
  


  //additional things

  const newButton = document.createElement("button");
  const rootOfMain = document.querySelector(".wrapper").appendChild(newButton);
  newButton.setAttribute("id", "see-more");
  newButton.innerHTML="Click to See Below!"
  newButton.style.margin="2%";
  newButton.style.background="#112233";
  newButton.style.color="#fff";
  newButton.style.padding="1%";
  newButton.style.fontSize="1.2rem";
  document.querySelector("html").style.scrollBehavior="smooth";
  

  newButton.addEventListener("click", ()=>{
    location.href="#newDiv";
    
  });




  

}




