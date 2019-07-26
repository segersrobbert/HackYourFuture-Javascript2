'use strict';
{
  const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180,
    },
    {
      name: 'Some web development',
      duration: 120,
    },
    {
      name: 'Fix homework for class10',
      duration: 20,
    },
    {
      name: 'Talk to a lot of people',
      duration: 200,
    },
  ];

  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 240,
    },
    {
      name: 'Some more web development',
      duration: 180,
    },
    {
      name: 'Staring out the window',
      duration: 10,
    },
    {
      name: 'Talk to a lot of people',
      duration: 200,
    },
    {
      name: 'Look at application assignments new students',
      duration: 40,
    },
  ];

  //********************************************************************************************************/
  //concatenating the two object array in to one array and the initial maartjes Hourly Rate
  const maartjesTasks = monday.concat(tuesday);
  const maartjesHourlyRate = 0;
  //**********************************User out put before Filtered ********************************************* */

  function maartjisTask(maartjesTasks) {
    let body = document.getElementById('body');
    let header = document.createElement('h1');
    let textHeader = document.createTextNode('Lists of Maartjies Task befor Filtered ');
    document.innerHTML = document.getElementById('body').appendChild(textHeader);
    let ul = document.createElement('ul');
    body.appendChild(ul);

    for (let val of maartjesTasks) {
      let nameli = document.createElement('li');

      let listNod1 = document.createTextNode('Task:' + val.name);

      ul.appendChild(nameli);
      document.innerHTML = nameli.appendChild(listNod1);

      let durationli = document.createElement('li');
      let listNod2 = document.createTextNode('Duration:' + val.duration);

      nameli.appendChild(durationli);
      document.innerHTML = durationli.appendChild(listNod2);
    }
  }
  // maartjisTask(maartjesTasks);

  //**********************************User out put After Filtered ********************************************* */
  function maartjisFilteredTask(earnings) {
    let body = document.getElementById('body');
    let header = document.createElement('h1');
    let textHeader = document.createTextNode('Lists of Maartjies Task After Filtered ');
    document.innerHTML = document.getElementById('body').appendChild(textHeader);
    let ul = document.createElement('ul');
    body.appendChild(ul);

    for (let val of earnings) {
      let nameli = document.createElement('li');

      let listNod1 = document.createTextNode('Task:' + val.name);

      ul.appendChild(nameli);
      document.innerHTML = nameli.appendChild(listNod1);

      let durationli = document.createElement('li');
      let listNod2 = document.createTextNode('Duration:' + val.duration);

      nameli.appendChild(durationli);
      document.innerHTML = durationli.appendChild(listNod2);
    }
  }

  //**********************************User out put Total ********************************************* */
  function maartjiesTotalEarn(totalEarnOutPut) {
    let totalEarn = document.createElement('totalEarn');
    let totalEarnText = document.createTextNode(
      '*************' + 'Total Earn:' + totalEarnOutPut + '*************',
    );
    body.appendChild(totalEarn);
    document.innerHTML = totalEarn.appendChild(totalEarnText);
  }

  // converting minits to hours and filtering tasks less than 1hr.

  const earnings = maartjesTasks.filter(tasks => {
    let minitHoure = Math.floor(tasks.duration / 60);
    let minitRate = tasks.duration % 60;
    let maartjesHourlyRate = minitHoure + minitRate / 60;
    tasks.duration = maartjesHourlyRate;
    return maartjesHourlyRate > 1;
  });

  console.log('After filter and converted to minit: ');
  console.log(earnings);

  //*******Transferring a filtered array to the new array computeEarnings array ***********

  const computeEarnings = earnings.map(tasks => {
    return (tasks.duration *= 20);
  });

  //**********************Calculate maartjes Total Earn**********************************//

  const maartjesTotalEarn = computeEarnings.reduce((computeEarnings, totalEarnung = 0) => {
    totalEarnung += computeEarnings;
    return totalEarnung;
  });

  //**********************converted to currency format and rounded to 2 decimal place **********************************//
  const maartjesTotalEarnRounded = afterRouned => {
    afterRouned = new Intl.NumberFormat('BELGIUM', { style: 'currency', currency: 'EUR' }).format(
      afterRouned.toFixed(2),
    );

    console.log('*******************************************************************************');
    console.log('Maartjes total Earnung ' + afterRouned);
    console.log('*******************************************************************************');
    return afterRouned;
  };

  document.getElementById('button1').addEventListener('click', function() {
    maartjisTask(maartjesTasks);
  });

  document.getElementById('button2').addEventListener('click', function() {
    maartjisFilteredTask(earnings);
  });
  let totalEarnOutPut = maartjesTotalEarnRounded(maartjesTotalEarn);
  document.getElementById('button3').addEventListener('click', function() {
    maartjiesTotalEarn(totalEarnOutPut);
  });
  //maartjisFilteredTask(earnings);
  //maartjiesTotalEarn(totalEarnOutPut);

  //Do not change or remove anything below this line
  // module.exports = {
  //   maartjesTasks,
  //   maartjesHourlyRate,
  //   computeEarnings,
  // };
}
