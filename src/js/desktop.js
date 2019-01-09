/*
*
* Desktop controller module
*
* Contains eventlistener to create eatch apps
*
*
*
*/

const Z_INDEX_OFFSET = 20
// const OFFSET_LEFT = 40
// const OFFSET_TOP = 40

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
  // updatePosition(memo)
  closeButton()
})

// Creates Weather application.
buttonWeather.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#appContainer')
  let weatherApp = document.createElement('weather-app')

  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
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

// function updatePosition (app) {
//   for (let i = 0; i < apps.length; i += 20) {
//     getContainer(apps[i]).style.left = OFFSET_LEFT + i + 'px'
//     getContainer(apps[i]).style.top = OFFSET_TOP + i + 'px'
//   }
// }

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
 * @param {Object} event
 */
function closeWindow (event) {
  let closeApp = event.target.parentNode.parentNode.parentNode.parentNode.host.parentNode.host
  closeApp.parentNode.removeChild(closeApp)
  apps.pop()
}
