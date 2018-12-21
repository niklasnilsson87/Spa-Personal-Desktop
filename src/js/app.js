import './dragable.js'
import './memory-game.js'
import './weather.js'
import './templates.js'

const Z_INDEX_OFFSET = 20
let apps = []
let game = document.querySelector('#game')
let button = document.querySelector('#button')
let buttonW = document.querySelector('#weather')

button.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#game')
  let memo = document.createElement('memory-game')
  gameDiv.appendChild(memo)
  apps.push(memo)
  updateZindex()
})

buttonW.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#game')
  let weatherApp = document.createElement('weather-app')
  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
  updateZindex()
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
//   let closeButton = apps.shadowRoot.querySelector('border-top img')
//   console.log(closeButton)
//   closeButton.addEventListener('click', e => {

//   })
// }
// let closeButton = apps.shadowRoot.querySelector('border-top img')
// console.log(closeButton)

// window.addEventListener('click', e => {
//   let windowhand = document.querySelector('#game')
//   let targets = (e.target.classList.contains('bottom'))
//   if (targets === true) {
//     let child = windowhand.children
//     console.log(child)
//     e.target.classList.add('top')
//     e.target.classList.remove('bottom')
//   }
// })

// if (apps.length > 0) gameDiv.removeChild(apps.pop())
