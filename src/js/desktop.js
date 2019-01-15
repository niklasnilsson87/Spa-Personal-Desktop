/*
*
* Desktop controller module
*
* Contains eventlistener to create eatch apps
* Eatch eventlistener pushes the app into the array,
* gets the icon to the app, has an updateZindex function and a close function
*
*/

const Z_INDEX_OFFSET = 20
let apps = []
let appContainer = document.querySelector('#appContainer')
let buttonMemory = document.querySelector('#button')
let buttonWeather = document.querySelector('#weather')
let buttonChat = document.querySelector('#chat')

// Creates Chat application.
buttonChat.addEventListener('click', e => {
  e.preventDefault()
  let appContainer = document.querySelector('#appContainer')
  let chat = document.createElement('chat-app')
  appContainer.appendChild(chat)
  apps.push(chat)
  getIcon(chat).src = './image/ChatIcon.png'
  updateZindex()
  closeButton()
})

// Creates Memory application.
buttonMemory.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#appContainer')
  let memo = document.createElement('memory-game')
  gameDiv.appendChild(memo)
  apps.push(memo)
  updateZindex()
  closeButton()
})

// Creates Weather application.
buttonWeather.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#appContainer')
  let weatherApp = document.createElement('weather-app')
  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
  getIcon(weatherApp).src = './image/WeatherIcon.png'
  updateZindex()
  closeButton()
})

// Controlls focus on divs that is clicked.
appContainer.addEventListener('mousedown', e => {
  let index = apps.indexOf(e.target)
  let tempApp = apps[index]
  apps.splice(index, 1)
  apps.push(tempApp)
  updateZindex()
})

/**
 * Function that gets the containerID from the custom elements in apps array
 *
 * @param {object} dragable Costum element
 * @returns returns the path to containerID
 */
function getContainer (dragable) {
  return dragable.shadowRoot
    .querySelector('drageble-tag')
    .shadowRoot.querySelector('#container')
}

/**
 * Function to get focused on the "window" that was clicked.
 *
 */
function updateZindex () {
  for (let i = 0; i < apps.length; i++) {
    getContainer(apps[i]).style.zIndex = Z_INDEX_OFFSET + i
  }
}

/**
 * Function to close "window" divs.
 *
 */
function closeButton () {
  let button = apps[apps.length - 1]
    .shadowRoot.querySelector('drageble-tag')
    .shadowRoot.querySelector('#border-top a')

  button.addEventListener('click', e => {
    closeWindow(e)
  })
}

/**
 * Function to remove divs from the DOM and the apps array.
 *
 * @param {Object} event event that is clicked on
 */
function closeWindow (event) {
  let closeApp = event.target.parentNode.parentNode.parentNode.parentNode.host.parentNode.host
  closeApp.parentNode.removeChild(closeApp)
  apps.pop()
}

/**
 * Gets the query to app icons
 *
 * @param {Object} app the app that was clicked on
 * @returns the path to app-icon
 */
function getIcon (app) {
  return app.shadowRoot.querySelector('drageble-tag').shadowRoot.querySelector('#app-icon')
}

/**
 *Sets the current time and prits it to screen
 *
 */
function clock () {
  const fullDate = new Date()
  let hours = fullDate.getHours()
  let minutes = fullDate.getMinutes()
  let seconds = fullDate.getSeconds()

  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  document.querySelector('#hour').textContent = hours
  document.querySelector('#minutes').textContent = ':' + minutes
  document.querySelector('#seconds').textContent = ':' + seconds
}

/**
 * Sets the current date and prints it to screen.
 *
 */
function date () {
  let datecontainer = document.querySelector('.dates')
  let date = new Date().toDateString()
  datecontainer.textContent = date
}

clock()
date()
// updates the clock and dates.
setInterval(clock, 1000)
setInterval(date, 60000)
