import './memory-game.js'

let button = document.querySelector('#button')
button.addEventListener('click', e => {
  e.preventDefault()
  let memo = document.createElement('memory-game')
  let gameDiv = document.querySelector('#game')

  gameDiv.style.left = '20px'
  gameDiv.style.top = '20px'
  gameDiv.appendChild(memo)
})
