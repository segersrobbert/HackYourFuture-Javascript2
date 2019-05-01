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
  // Replace with your own code
  const ul = document.createElement('ul');
  function generateList() {
    const newList = document.createElement('ul');

    for (let i = 0; i < bookTitles.length; i++) {
      const book = bookTitles[i];
      newList.innerHTML += `<li>${book}</li>`;
    }

    return newList;
  }

  document.body.append(generateList());
}
