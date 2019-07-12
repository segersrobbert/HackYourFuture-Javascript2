'use strict';
{
  const movieTitles = [
    'game_of_thrones','prison_break',
    'vampire_diaries','the_100',
    'arrow','flash','originals',
    'viking','in_to_the_badland',
    'milenu'
  ];
  //==========creating nested object====================//
  let movieInfo = {
    game_of_thrones: {
      title : 'Game of Thrones',
      language : 'English',
      author: 'George R. R. Martin',
    },
    prison_break : {
      title : 'Prison Break',
      language : 'English',
      author: 'Paul T. Scheuring',
    },
    vampire_diaries : {
      title : 'Vampire Diearies',
      language : 'English',
      author: 'L.J.Smith',
    },
    the_100 : {
      title : 'The 100',
      language : 'English',
      author: 'Kass Morgan',
    },
    arrow : {
      title : 'Arrow',
      language : 'English',
      author: 'Philip K. Dick',
    },
    flash : {
      title : 'The Flash',
      language : 'English',
      author: 'Geoff Johns',
    },
    originals : {
      title : 'The Originals',
      language : 'English',
      author: 'Julie Plec',
    },
    viking : {
      title : 'Viking',
      language : 'English',
      author: 'Michael Hirst',
    },
    in_to_the_badland : {
      title : 'Into the badland',
      language : 'English',
      author: 'Nick Frost',
    },
    milenu : {
      title : 'Milenu',
      language : 'Tigrigna',
      author: 'Eritrean Government',
    },
  }
  //creat object for the images
  let images = {
    game_of_thrones :{
      image: './image/game_of_thrones.jpg',
    },
    prison_break:{
      image:'./image/prison_break.jpg'
    },
    vampire_diaries: {
      image : './image/vampire_diaries.jpg',
    },
    the_100 :{
      image: './image/the_100.jpg',
    },
    arrow : {
      image : './image/arrow.jpg',
    },
    flash :{
      image : './image/flash.jpg',
    },
    originals:{
      image: './image/originals.jpg',
    },
    viking: {
      image : './image/viking.jpg',
    },
    in_to_the_badland: {
      image: './image/in_to_the_badland.jpg',
    },
    milenu: {
      image: './image/milenu.jpg',
    }
  }
  //creat greating marquee
  let marqueeElement = document.createElement('marquee');
  //give some content
  let h1greatingContent = document.createTextNode('Top 10 My Favorite Serious Movies');
  //appending to the h1 creatied element
  marqueeElement.appendChild(h1greatingContent);
  // append marqueeElement to div with id root alrady created in index.html
  document.getElementById("greating").appendChild(marqueeElement);
  //=================================//
  function domCreator(firstObject, secondObject){
    //=====firstObject ========//
    for (let x in firstObject){
      if (firstObject.hasOwnProperty(x)){
        //creat a container and set an attribute
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'title');
        // creat First h2 element
        const firsth2 = document.createElement('h2');
        // creat a content for h2
        const firsth2Content = document.createTextNode(` Title: ${firstObject[x].title}`);
        //add the first h2 content to the h2 element
        firsth2.appendChild(firsth2Content);
        //add h2 element to div1
        div1.appendChild(firsth2);
        root.appendChild(div1);
        // creat p element
        const p1 = document.createElement('p');
        // creat a content for p1 element
        const p1Content = document.createTextNode(`Author: ${firstObject[x].author}`);
        // add p1 content to p element
        p1.appendChild(p1Content);
        // add p1 to h2 
        div1.appendChild(p1)
        // creat second p element
        const p2 = document.createElement('p');
        // creat p2 content
        const p2content = document.createTextNode(`Language: ${firstObject[x].language}`);
        // add p1 content to second p element
        p2.appendChild(p2content);
        div1.appendChild(p2);
        //===================second Object================================//
        // creat image tag
        const imgTag = document.createElement('img');
        // set src attribute value from second object
        imgTag.setAttribute('src',`${secondObject[x].image}`);
        // set alt attribute value to be key
        imgTag.setAttribute('alt', `${x}`);
        // add image to div1
        div1.appendChild(imgTag)
      }  
    }
  }
 // function main(){
    domCreator(movieInfo, images)
 // }
 // window.addEventListener('load', main);
  }
  

