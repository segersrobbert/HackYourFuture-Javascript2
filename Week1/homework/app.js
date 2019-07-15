'use strict'
{
  // Data
  var objLibrary = {}
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
  // Funtions
  function createElement(typeelment) {
    return document.createElement(typeelment)
  }
  function addToParent(parent, child) {
    return parent.appendChild(child)
  }
  function addObjLibraryToList(array, object) {
    var ul = createElement('UL')
    var textNodeTitle, textNodeAutor, textNodeLanguage
    var olBook, h2Title, liAutor, liLanguage
    for (let value of array) {
      // Create element of the list
      olBook = createElement('OL')
      olBook.setAttribute('id', value)
      h2Title = createElement('H2')
      liAutor = createElement('LI')
      liLanguage = createElement('LI')
      // Create text node
      textNodeTitle = document.createTextNode(object[value].title)
      textNodeAutor = document.createTextNode(object[value].autor)
      textNodeLanguage = document.createTextNode(object[value].language)
      // Add element to each parent in the list
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

  function addObjImgToList(array, img) {
    var liImg, imgNode
    for (let value of array) {
      // Create element of the list
      liImg = createElement('LI')
      imgNode = createElement('IMG')
      imgNode.src = img[value]
      // Add imgNode to Li in the list
      addToParent(liImg, imgNode)
      // Add element Li to each parent in the list in its repective order using the BookID
      var olBook = document.getElementById(value)
      olBook.insertBefore(liImg, olBook.childNodes[1])
    }
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
          object[value] = './img/odyssey.jpg'
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
  function addHeader() {
    var div = createElement('DIV')
    var textNodeDiv = document.createTextNode('My Books')
    addToParent(div, textNodeDiv)
    addToParent(document.body, div)
  }
  function addfooter() {
    var div = createElement('DIV')
    var textNodeDiv = document.createTextNode('by NN - HYF JS2-W1')
    div.setAttribute('id', 'footer')
    addToParent(div, textNodeDiv)
    addToParent(document.body, div)
  }
  // Procedure
  addHeader() // Add Header to the page
  objImages = makeObjectImg(BookTitles) // Create obj with ubication of images
  objLibrary = makeLibrary(BookTitles) // Create obj with books information
  addObjLibraryToList(BookTitles, objLibrary) // Add object Library to list ul/ol/li
  addObjImgToList(BookTitles, objImages) // Add object Img to list ul/ol/li
  addfooter() // Add footer to the page
}
