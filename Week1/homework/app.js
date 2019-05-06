'use strict';

{
  // Replace with your own book titles
  const bookTitles = [
    'dan_brown_da_vinci_code',
    'suzanne_collins_hunger_games',
    'michelle_obama_becoming',
    'harper_lee_kill_a_mockingbird',
    'elif_shafak_forty_rules_of_love',
    'orhan_pamuk_a_strangeness_inmymind',
    'john_green_fault_in_ourstars',
    'bill_clinton_my_life',
    'antoine_de_saint_exupery_little_prince',
    'geronimo_stilton_lost_treasure_ofthe_emerald_eye'
  ];


  const bookInformations = {

    'dan_brown_da_vinci_code': {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      language: 'English'
    },
    'suzanne_collins_hunger_games': {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      language: 'English'
    },
    'michelle_obama_becoming': {
      title: 'Becoming',
      author: 'Michelle Obama',
      language: 'English'
    },
    'harper_lee_kill_a_mockingbird': {
      title: 'To Kill A Mockingbird',
      author: 'Harper Lee',
      language: 'English'
    },
    'elif_shafak_forty_rules_of_love': {
      title: 'The Forty Rules Of Love',
      author: 'Elif Shafak',
      language: 'English'
    },
    'orhan_pamuk_a_strangeness_inmymind': {
      title: 'A Strangeness In My Mind',
      author: 'Orhan Pamuk',
      language: 'English'
    },
    'john_green_fault_in_ourstars': {
      title: 'The Fault In Our Stars',
      author: 'John Green',
      language: 'English'
    },
    'bill_clinton_my_life': {
      title: 'My Life',
      author: 'Bill Clinton',
      language: 'English'
    },
    'antoine_de_saint_exupery_little_prince': {
      title: 'The Little Prince',
      author: 'Antoine De Saint-Exupery',
      language: ''
    },
    'geronimo_stilton_lost_treasure_ofthe_emerald_eye': {
      title: 'Lost Treasure Of The Emerald Eye',
      author: 'Geronimo Stilton',
      language: ''
    }
  };

  
  
  const bookCovers = {
    dan_brown_da_vinci_code: './bookcovers/the da vinci code.jpeg',
    suzanne_collins_hunger_games: './bookcovers/thehungergames.jpg',
    michelle_obama_becoming: './bookcovers/becoming.jpg',
    harper_lee_kill_a_mockingbird: './bookcovers/tokillamockingbird.jpg',
    elif_shafak_forty_rules_of_love: './bookcovers/elifshafak.jpeg',
    orhan_pamuk_a_strangeness_inmymind: './bookcovers/orhanpamuk.jpg',
    john_green_fault_in_ourstars: './bookcovers/thefaultinourstars.jpg',
    bill_clinton_my_life: './bookcovers/mylife.jpg',
    antoine_de_saint_exupery_little_prince: './bookcovers/thelittleprince.jpg',
    geronimo_stilton_lost_treasure_ofthe_emerald_eye: './bookcovers/geronimostilton.jpg'
  };
 
  
  //1.5 section
  
  
  
  function generateList() {
    const newList = document.createElement("ul");
    for (var key in bookInformations) {
      const titleText = bookInformations[key].title;
      const authorText = bookInformations[key].author;
      const languageText = bookInformations[key].language;
      const titleElement = document.createElement("h3");
      const image = document.createElement('img');
      image.setAttribute('src', bookCovers[key]);
      image.setAttribute('alt', key);
      image.setAttribute('width', '70%');
      const authorElement = document.createElement("p");
      const languageElement = document.createElement("p");
      const li = document.createElement("li");
      titleElement.innerHTML = titleText;
      authorElement.innerHTML = authorText;
      languageElement.innerHTML = languageText;
      li.appendChild(titleElement);
      li.appendChild(image);
      li.appendChild(authorElement);
      li.appendChild(languageElement);
      newList.appendChild(li);
    }
    return newList;
  }
  document.body.append(generateList());

 
  
  const imageOver = document.querySelector('header');
  imageOver.addEventListener("mouseover", mouseOver);
  imageOver.addEventListener("mouseout", mouseOut);
  function mouseOver() {
    imageOver.style.color = 'blue';
  }
  function mouseOut() {
    imageOver.style.color = 'black';
  }


}


