// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const month = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December"
}

function Header() {
  const head = document.createElement('div')
  const date = document.createElement('span')
  const header = document.createElement('h1')
  const temps = document.createElement('span')

  head.append(date)
  head.append(header)
  head.append(temps)

  head.classList.add('header')
  date.classList.add('date')
  temps.classList.add('temp')

  const today = new Date();
  const todaysDate =  (month[`${today.getMonth()}`]) + ' ' + today.getDate() + ', ' + today.getFullYear();

  date.innerText = todaysDate
  header.innerText = 'Lambda Times'
  temps.innerText = '98°'

  return head
}

document.querySelector('.header-container').append(Header())