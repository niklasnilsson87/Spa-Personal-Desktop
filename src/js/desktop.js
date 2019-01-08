
const Z_INDEX_OFFSET = 20
// const OFFSET_LEFT = 40
// const OFFSET_TOP = 40
let apps = []
let appContainer = document.querySelector('#appContainer')
let buttonMemory = document.querySelector('#button')
let buttonWeather = document.querySelector('#weather')
let buttonChat = document.querySelector('#chat')

buttonChat.addEventListener('click', e => {
  e.preventDefault()
  let appContainer = document.querySelector('#appContainer')
  let chat = document.createElement('chat-app')
  appContainer.appendChild(chat)
  apps.push(chat)
  updateZindex()
  closeButton()
})

buttonMemory.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#appContainer')
  let memo = document.createElement('memory-game')
  gameDiv.appendChild(memo)
  apps.push(memo)
  updateZindex()
  closeButton()
})

buttonWeather.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#appContainer')
  let weatherApp = document.createElement('weather-app')

  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
  updateZindex()
  closeButton()
})

appContainer.addEventListener('mousedown', e => {
  let index = apps.indexOf(e.target)
  let tempApp = apps[index]
  apps.splice(index, 1)
  apps.push(tempApp)
  updateZindex()
})

function getContainer (dragable) {
  return dragable.shadowRoot
    .querySelector('drageble-tag')
    .shadowRoot.querySelector('#container')
}

function updateZindex () {
  for (let i = 0; i < apps.length; i++) {
    getContainer(apps[i]).style.zIndex = Z_INDEX_OFFSET + i
  }
}

function closeButton () {
  let button = apps[apps.length - 1]
    .shadowRoot.querySelector('drageble-tag')
    .shadowRoot.querySelector('#border-top a')
  console.log(button)

  button.addEventListener('click', e => {
    closeWindow(e)
    e.stopPropagation()
  })
}

function closeWindow (event) {
  let closeApp = event.target.parentNode.parentNode.parentNode.parentNode.host.parentNode.host
  closeApp.parentNode.removeChild(closeApp)
  apps.pop()
  console.log(apps)
}
