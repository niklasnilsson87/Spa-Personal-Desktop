import './memory-game.js'
import './weather.js'

let button = document.querySelector('#button')
button.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#game')
  let memo = document.createElement('memory-game')
  gameDiv.appendChild(memo)
})

let buttonW = document.querySelector('#weather')
buttonW.addEventListener('click', e => {
  e.preventDefault()
  let weatherdiv = document.querySelector('#game')
  let weaterApp = document.createElement('weather-app')
  weatherdiv.appendChild(weaterApp)
})
