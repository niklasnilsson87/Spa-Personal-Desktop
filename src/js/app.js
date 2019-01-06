import './dragable.js'
import './memory-game.js'
import './weather.js'
import './chat.js'
import './templates.js'

const Z_INDEX_OFFSET = 20
// const OFFSET_LEFT = 40
// const OFFSET_TOP = 40
let apps = []
let game = document.querySelector('#game')
let buttonMemory = document.querySelector('#button')
let buttonWeather = document.querySelector('#weather')
let buttonChat = document.querySelector('#chat')

buttonChat.addEventListener('click', e => {
  e.preventDefault()
  let game = document.querySelector('#game')
  let chat = document.createElement('chat-app')
  game.appendChild(chat)
  apps.push(chat)
  updateZindex()
  // close()
})

buttonMemory.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#game')
  let memo = document.createElement('memory-game')
  memo.setAttribute('class', 'close')
  gameDiv.appendChild(memo)
  apps.push(memo)
  updateZindex()
  // close()
})

buttonWeather.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#game')
  let weatherApp = document.createElement('weather-app')
  weatherApp.setAttribute('class', 'close')
  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
  updateZindex()
  // close()
})

game.addEventListener('click', e => {
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

// function close () {
//   for (let i = 0; i < apps.length; i++) {
//     apps[i].shadowRoot
//       .querySelector('drageble-tag')
//       .shadowRoot.querySelector('#border-top a').addEventListener('click', e => {
//         e.preventDefault()

//         let getclose = document.querySelector('#game')
//         console.log(getclose)
//         // let classClose = document.querySelector('.close')
//         console.log(apps)
//         apps.pop()
//         getclose.removeChild(e)
//         e.stopPropagation()
//       })
//   }
// }

// function getCloseButton (closeB) {
//   return closeB.shadowRoot
//     .querySelector('drageble-tag')
//     .shadowRoot.querySelector('#border-top a')
// }
