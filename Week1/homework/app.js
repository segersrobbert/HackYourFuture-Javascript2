'use strict'
{
  // data
  var library = {}
  var objImages = {}
  const BookTitles = [
    'the_old_man_and_the_sea',
    'uncle_toms_cabin',
    'twenty_love_poems_and_a_song_of_despair',
    'romeo_and_juliet',
    'the_tragedy_of_hamlet',
    'the_odyssey',
    'oedipus_the_king',
    'the_clever_gentleman_sir_quixote_of_la_mancha',
    'one_hundred_years_of_solitude',
    'angels_and_demons'
  ]
  // funtions
  function createElement(typeelment) {
    return document.createElement(typeelment)
  }
  function addToParent(parent, child) {
    return parent.appendChild(child)
  }

  function addArrayToList(array, object) {
    var ul = createElement('UL')
    var textNodeTitle, textNodeAutor, textNodeLanguage
    var olBook, h2Title, liAutor, liLanguage
    for (let value of array) {
      olBook = createElement('OL')
      h2Title = createElement('h2')
      liAutor = createElement('LI')
      liLanguage = createElement('LI')
      textNodeTitle = document.createTextNode(object[value].title)
      textNodeAutor = document.createTextNode(object[value].autor)
      textNodeLanguage = document.createTextNode(object[value].language)
      addToParent(h2Title, textNodeTitle)
      addToParent(liAutor, textNodeAutor)
      addToParent(liLanguage, textNodeLanguage)
      addToParent(olBook, h2Title)
      addToParent(olBook, liAutor)
      addToParent(olBook, liLanguage)
      addToParent(ul, olBook)
    }
    addToParent(document.body, ul)
  }

  function makeLibrary(array) {
    var object = {}
    for (let value of array) {
      switch (value) {
        case 'the_old_man_and_the_sea':
          object[value] = {
            autor: 'Ernest Hemingway',
            language: 'English',
            title: 'The old man and the sea'
          }
          break
        case 'uncle_toms_cabin':
          object[value] = {
            autor: 'Harriet Beecher Stowe',
            language: 'English',
            title: ' Uncle Tom\'s Cabin'
          }
          break
        case 'twenty_love_poems_and_a_song_of_despair':
          object[value] = {
            autor: 'Pablo Neruda',
            language: 'Spanish',
            title: 'Veinte poemas de amor y una canción desesperada'
          }
          break
        case 'romeo_and_juliet':
          object[value] = {
            autor: 'William Shakespeare',
            language: 'English',
            title: 'Romeo and Juliet'
          }
          break
        case 'the_tragedy_of_hamlet':
          object[value] = {
            autor: 'William Shakespeare',
            language: 'English',
            title: 'The Tragedy of Hamlet'
          }
          break
        case 'the_odyssey':
          object[value] = {
            autor: 'Homero',
            language: 'Greek',
            title: 'The Odyssey'
          }
          break
        case 'oedipus_the_king':
          object[value] = {
            autor: 'Sofocles',
            language: 'Greek',
            title: 'Oedipus the king'
          }
          break
        case 'the_clever_gentleman_sir_quixote_of_la_mancha':
          object[value] = {
            autor: 'Miguel de Cervantes',
            language: 'Spanish',
            title: 'El ingenioso hidalgo don Quijote de la Mancha'
          }
          break
        case 'one_hundred_years_of_solitude':
          object[value] = {
            autor: 'Gabriel García Márquez',
            language: 'Spanish',
            title: 'Cien años de soledad'
          }
          break
        case 'angels_and_demons':
          object[value] = {
            autor: 'Dan Brown',
            language: 'English',
            title: 'Angels & Demons'
          }
          break
      }
    }
    return object
  }
  function makeObjectImg(array) {
    var object = {}
    for (let value of array) {
      switch (value) {
        case 'the_old_man_and_the_sea':
          object[value] = './img/the_old_man_and_the_sea.jpg'
          break
        case 'uncle_toms_cabin':
          object[value] = './img/unle_tom.jpg'
          break
        case 'twenty_love_poems_and_a_song_of_despair':
          object[value] = './img/veinte_poemas.jpg'
          break
        case 'romeo_and_juliet':
          object[value] = './img/romeo_and_juliet.png'
          break
        case 'the_tragedy_of_hamlet':
          object[value] = './img/hamlet.jpg'
          break
        case 'the_odyssey':
          object[value] = './img/the_old_man_and_the_sea.jpg'
          break
        case 'oedipus_the_king':
          object[value] = './img/oedipus.jpg'
          break
        case 'the_clever_gentleman_sir_quixote_of_la_mancha':
          object[value] = './img/don_quijote.jpg'
          break
        case 'one_hundred_years_of_solitude':
          object[value] = './img/cien_anios.jpg'
          break
        case 'angels_and_demons':
          object[value] = './img/angels_and_demons.jpg'
          break
      }
    }
    return object
  }
  // Procedure
  objImages = makeObjectImg(BookTitles)
  library = makeLibrary(BookTitles)
  addArrayToList(BookTitles, library)
  console.log(objImages)
}
