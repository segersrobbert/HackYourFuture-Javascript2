'use strict'
{
  const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 200
    }
  ]

  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 240
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 200
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ]
  const maartjesTasks = monday.concat(tuesday)
  const maartjesHourlyRate = 20
  function computeEarnings(tasks, hourlyRate) {
    let sumEarnings = 0
    sumEarnings = tasks.filter(task => task.duration >= 120)
      .map(task => (task.duration / 60) * maartjesHourlyRate)
      .reduce((previousTaskEarn, currentTaskEarn) => previousTaskEarn + currentTaskEarn, 0)

    var r2a = document.getElementById('r2a')
    var r2b = document.getElementById('r2b')
    // eslint-disable-next-line no-multi-str
    r2a.innerHTML = 'Filter out everything that took less \
    than two hours: <br>' + print(tasks.filter(task => task.duration >= 120))
    r2b.innerHTML = 'Multiply the each duration by a per-hour \
    rate for billing (use €20/hour): <br>' + print(tasks.filter(task => task.duration >= 120)
      .map(task => (task.duration / 60) * maartjesHourlyRate))
    return sumEarnings
  }
  function exerciseEarning() {
    // eslint-disable-next-line no-unused-vars
    const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate)
    // add code to convert `earnings` to a string rounded to two decimals (euro cents)
    var earningEuro = new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'EUR'
    }).format(earnings)
    var r2c = document.getElementById('r2c')
    r2c.innerHTML = `Maartje has earned: ${earningEuro}`
  }
  function print(o) {
    return JSON.stringify(o, null, '\t').replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;')
  }
  var e2 = document.getElementById('objs')
  e2.innerHTML = 'Monday:<br> ' + print(monday)
  e2.innerHTML = e2.innerHTML + '<br><br>Tuesday:<br> ' + print(tuesday)
  var objectButton2 = document.getElementById('2')
  objectButton2.addEventListener('click', exerciseEarning) // Call exercise One.
  // Do not change or remove anything below this line
  module.exports = {
    maartjesTasks,
    maartjesHourlyRate,
    computeEarnings
  }
}
