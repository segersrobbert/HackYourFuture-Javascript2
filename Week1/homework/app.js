'use strict';

{

  const bookTitles = [
    // Replace with your own book titles
    'gingerbread',
    'normal_people',
    'dark_constellations',
    'the_water_cure',
    'star',
    'black_leopar_red_wolf',
    'optic_nerve',
    'ghost_wall',
    'naamah',
    'message_from_the_shadows'

  ];

  // Replace with your own code
  const bookTitlesObjects = { 
    gingerbread: {
      Title: 'Gingerbread',
      Written_By: 'Helen Oyeyemi',
      Release_Date: 'March 5, 2019',
      Language: 'English'},
    normal_people: {
      Title: 'Normal People',
      Written_By: 'Sally Rooney',
      Release_Date: 'April 16, 2019',
      Language: 'English'},
    dark_constellations: {
      Title: 'Dark Constellations',
      Written_By: 'Pola Oloixarac',
      Release_Date: 'April 16, 2019',
      Language: 'English'},
    the_water_cure: {
      Title: 'The Water Cure',
      Written_By: 'Sophie Mackintosh',
      Release_Date: 'January 8, 2019',
      Language: 'English'},
    star: {
      Title: 'Star',
      Written_By: 'Yukio Mishima',
      Release_Date: 'April 30, 2019',
      Language: 'English'},
    black_leopar_red_wolf: {
      Title: 'Black Leopar Red Wolf',
      Written_By: 'Marlon James',
      Release_Date: 'February 5, 2019',
      Language: 'English'},
    optic_nerve: {
      Title: 'Optic Nerve',
      Written_By: 'María Gainza',
      Release_Date: 'April 9, 2019',
      Language: 'English'},
    ghost_wall: {
      Title: 'Ghost Wall',
      Written_By: 'Sarah Moss',
      Release_Date: ' January 8, 2019',
      Language: 'English'},
    naamah: {
      Title: 'Naamah',
      Written_By: 'Sarah Blake',
      Release_Date: ' April 9, 2019',
      Language: 'English'},
    message_from_the_shadows:{
      Title: 'Message From The Shadows',
      Written_By: 'Antonio Tabucchi',
      Release_Date: 'May 14, 2019',
      Language: 'English'}
}
const bookCoverImageObjects = {
   gingerbread: "./images/gingerbread.jpg",
   normal_people: "./images/normal_people.jpg",
   dark_constellations: "./images/dark_constellations.jpeg",
   the_water_cure: "./images/the_water_cure.jpg",
   star: "./images/star.jpg",
   black_leopar_red_wolf: "./images/black_leopar_red_wolf.jpg",
   optic_nerve: "./images/optic_nerve.jpg",
   ghost_wall: "./images/ghost_wall.jpg",
   naamah: "./images/naamah.jpg",
   message_from_the_shadows: "./images/message_from_the_shadows.jpg"
}

const h2Titles = [
  'Written By',
  'Release Date',
  'Language'
] ;



function bookDetails( titles, details, images ,h2title){
  let ul = document.createElement("ul");
    for(let i in titles){
    let li = document.createElement("li");
    li.id = titles[i];
    let H1 = document.createElement("h1");
    H1.innerHTML = details[titles[i]].Title;
    let H3 = document.createElement('H3');
    H3.innerHTML = h2title[0] + ' :';
    let newH3 =  document.createElement('H3');
    newH3.innerHTML = h2title[1]+ ' :';
    let lastH3 =  document.createElement('H3');
    lastH3.innerHTML = h2title[2]+ ' :';
    let p1 = document.createElement("p");
    p1.innerHTML =  details[titles[i]].Written_By;
    let p2 = document.createElement("p");
    p2.innerHTML = details[titles[i]].Release_Date;
    let p3 = document.createElement("p");
    p3.innerHTML = details[titles[i]].Language;
    let img = document.createElement("img");
    img.src = images[titles[i]];
  

   li.appendChild(H1);
   li.appendChild(img);
   li.appendChild(H3);
   li.appendChild(p1);
   li.appendChild(newH3);
   li.appendChild(p2);
   li.appendChild(lastH3);
   li.appendChild(p3);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}


bookDetails(bookTitles, bookTitlesObjects, bookCoverImageObjects, h2Titles);


}




