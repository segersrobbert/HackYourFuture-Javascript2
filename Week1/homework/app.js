'use strict';



{
  const bookTitles = [
    // Replace with your own book titles
    'sapiens', 'hyde_and_jekyll', 'chess', 'les_miserables', 'frankenstein', 'the_little_prince', 'anne_of_green_gables', 'the_kite_runner', 'son_ada', 'calikusu'
  ];
  
  const bookTitlesObj = { sapiens: {title:'Sapiens', language:'English', author:'Yuval Noah Harari'},
                          hyde_and_jekyll: {title: "Dr Jekyll and Mr Hyde", language: "English", author: "Robert Louis Stevenson"},
                          chess: {title: "Chess", language: "German", author: "Stefan Zweig"},
                          les_miserables: {title: "Les Miserables", language: "French", author: "Victor Hugo"},
                          frankenstein: {title: "Frankenstein", language: "English", author: "Mary Shelley"},
                          the_little_prince: {title: "Le Petit Prince", language: "French", author: "Antoine de Saint-Exupéry"},
                          anne_of_green_gables: {title: "Anne of Green Gables", language: "English", author: "Lucy Maud Montgomery"},
                          the_kite_runner: {title: "The Kite Runner", language: "English", author: "Khaled Hosseini"},
                          son_ada: {title: "Son Ada", language: "Turkish", author: "Zulfu Livaneli"},
                          calikusu: {title: "Calikusu", language: "Turkish", author: "Resat Nuri Guntekin"}
                        }
const imgTitles = { sapiens: "./img/sapiens.jpg",
                    hyde_and_jekyll: "./img/hyde_and_jekyll.jpg",
                    chess: "./img/chess.jpg",
                    les_miserables: "./img/les_miserables.jpg",
                    frankenstein: "./img/frankenstein.jpg",
                    the_little_prince: "./img/the_little_prince.jpg",
                    anne_of_green_gables: "./img/anne_of_green_gables.jpg",
                    the_kite_runner: "./img/the_kite_runner.jpg",
                    son_ada: "./img/son_ada.jpg",
                    calikusu: "./img/calikusu.jpg"
                  }
 

  function book_info ( arr_parameter, obj_parameter, img_obj ){
    let myUl = document.createElement("ul");
    for(let i in arr_parameter){
      let newLi = document.createElement("li");
      newLi.id = arr_parameter[i];

      let newH1 = document.createElement("h1");
      newH1.innerHTML = obj_parameter[arr_parameter[i]].title;
      let newH2 = document.createElement("h2");
      newH2.innerHTML = obj_parameter[arr_parameter[i]].language;
      let newH3 = document.createElement("h3");
      newH3.innerHTML = obj_parameter[arr_parameter[i]].author;
      let newImg = document.createElement("img");
      newImg.src = img_obj[arr_parameter[i]];
      
      newLi.appendChild(newH1);
      newLi.appendChild(newH2);
      newLi.appendChild(newH3);
      newLi.appendChild(newImg);
      myUl.appendChild(newLi);
    }
    document.body.appendChild(myUl);
  }


  book_info(bookTitles, bookTitlesObj, imgTitles);

}
