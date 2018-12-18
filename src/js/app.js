import './dragable.js'
import './memory-game.js'
import './weather.js'
import './templates.js'

let apps = []

let button = document.querySelector('#button')
button.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#game')
  let memo = document.createElement('memory-game')
  gameDiv.appendChild(memo)
  apps.push(memo)
})

let buttonW = document.querySelector('#weather')
buttonW.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#game')
  let weaterApp = document.createElement('weather-app')
  weatherdiv.appendChild(weaterApp)
})

// if (apps.length > 0) gameDiv.removeChild(apps.pop())
