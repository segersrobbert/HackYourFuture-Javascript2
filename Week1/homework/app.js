'use strict';
{
  // Ignore Spelling: milenu, Scheuring, Diearies, Kass, Geoff, tigringa /matchCase
  const movieTitles = [
    'game_of_thrones', 'prison_break',
    'vampire_diaries', 'the_100',
    'arrow', 'flash', 'originals',
    'viking', 'in_to_the_badland',
    'milenu'
  ];
  //==========creating nested object====================//
  let movieInfo = {
    game_of_thrones: {
      title: 'Game of Thrones',
      language: 'English',
      author: 'George R. R. Martin',
    },
    prison_break: {
      title: 'Prison Break',
      language: 'English',
      author: 'Paul T. Scheuring',
    },
    vampire_diaries: {
      title: 'Vampire Diearies',
      language: 'English',
      author: 'L.J.Smith',
    },
    the_100: {
      title: 'The 100',
      language: 'English',
      author: 'Kass Morgan',
    },
    arrow: {
      title: 'Arrow',
      language: 'English',
      author: 'Philip K. Dick',
    },
    flash: {
      title: 'The Flash',
      language: 'English',
      author: 'Geoff Johns',
    },
    originals: {
      title: 'The Originals',
      language: 'English',
      author: 'Julie Plec',
    },
    viking: {
      title: 'Viking',
      language: 'English',
      author: 'Michael Hirst',
    },
    in_to_the_badland: {
      title: 'Into the badland',
      language: 'English',
      author: 'Nick Frost',
    },
    milenu: {
      title: 'Milenu',
      language: 'Tigrigna',
      author: 'Eritrean Government',
    },
  }
  //creat object for the images
  let images = {
    game_of_thrones: {
      image: './image/game_of_thrones.jpg',
    },
    prison_break: {
      image: './image/prison_break.jpg'
    },
    vampire_diaries: {
      image: './image/vampire_diaries.jpg',
    },
    the_100: {
      image: './image/the_100.jpg',
    },
    arrow: {
      image: './image/arrow.jpg',
    },
    flash: {
      image: './image/flash.jpg',
    },
    originals: {
      image: './image/originals.jpg',
    },
    viking: {
      image: './image/viking.jpg',
    },
    in_to_the_badland: {
      image: './image/in_to_the_badland.jpg',
    },
    milenu: {
      image: './image/milenu.jpg',
    }
  }
  // creat 1st containers
  let div1 = document.createElement('div');
  div1.setAttribute('id', 'root1')
  // creat 2nd container
  let div2 = document.createElement('div');
  div2.setAttribute('id', 'root2')
  //create marquee element 
  let marqueeElement = document.createElement('marquee');
  //give some content
  let welcomeContent = document.createTextNode('Top 10 My Favorite Serious Movies');
  //appending to the h1 created element
  marqueeElement.appendChild(welcomeContent);
  // add marqueeElement to div1 container
  div1.appendChild(marqueeElement);
  //=================================//
  function domCreator(firstObject, imageObject, arry) {
    //=================arry======================//
    //create ul element
    let ul = document.createElement('ul');
    for (let x of arry) {
      // create li element 
      let li = document.createElement('li');
      //set attribute to li
      li.setAttribute('id', `${x}`);
      // add li to ul
      ul.appendChild(li);
      //=====firstObject ========//
      // creat h2 element
      const secondHeader = document.createElement('h2');
      // creat a content for h2
      const secondHeaderContent = document.createTextNode(` Title: ${firstObject[x].title}`);
      //add the first h2 content to the h2 element
      secondHeader.appendChild(secondHeaderContent);
      //add secondHeader to li
      li.appendChild(secondHeader);
      // creat p element
      const p1 = document.createElement('p');
      // creat a content for p1 element
      const p1Content = document.createTextNode(`Author: ${firstObject[x].author}`);
      // add p1 content to p element
      p1.appendChild(p1Content);
      // add p1 to li 
      li.appendChild(p1);
      // creat second p element
      const p2 = document.createElement('p');
      // creat p2 content
      const p2content = document.createTextNode(`Language: ${firstObject[x].language}`);
      // add p2 content to  p2 element
      p2.appendChild(p2content);
      //add p2 to li 
      li.appendChild(p2);
      //===================image Object================================//
      // creat image tag
      const imgTag = document.createElement('img');
      // set src attribute 
      //imgTag.setAttribute('src', `${imageObject[x].image}`); why this is not working?
      imgTag.src = imageObject[x].image;
      // set alt attribute 
      imgTag.setAttribute('alt', `${x}`);
      //add imaTag to li
      li.appendChild(imgTag);
      // add ul to div2 container 
      div2.appendChild(ul);
    }
  }
  //add the containers to body
  document.body.appendChild(div1);
  document.body.appendChild(div2);
  domCreator(movieInfo, images, movieTitles)
}


