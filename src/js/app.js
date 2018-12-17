import './memory-game.js'

let button = document.querySelector('#button')
button.addEventListener('click', e => {
  e.preventDefault()
  let memo = document.createElement('memory-game')
  let body = document.querySelector('#game')
  body.appendChild(memo)
})
