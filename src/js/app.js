import './memory-game.js'

let button = document.querySelector('#button')
button.addEventListener('click', e => {
  e.preventDefault()
  let gameDiv = document.querySelector('#game')
  let memo = document.createElement('memory-game')

  for (let i = 0; i < memo.length; i++) {
    memo.style.color = 'yellow'
  }

  gameDiv.appendChild(memo)
})
