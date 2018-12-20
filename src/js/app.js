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
  memo.classList.add('bottom')
  gameDiv.appendChild(memo)
  apps.push(memo)
  // console.log(apps)
})

let buttonW = document.querySelector('#weather')
buttonW.addEventListener('click', e => {
  e.preventDefault()

  let weatherdiv = document.querySelector('#game')
  let weatherApp = document.createElement('weather-app')
  weatherdiv.appendChild(weatherApp)
  apps.push(weatherApp)
})

window.addEventListener('click', e => {
  // console.log(e.target)
  for (let i = 0; i < apps.length; i++) {
    if (e.target.classList.contains('bottom')) {
      apps[i].classList.add('top')
      apps[i].classList.remove('bottom')
      console.log(e.target)
    }
    if (e.target.classList.contains('top')) {
      apps[i].classList.remove('top')
      apps[i].classList.add('bottom')
    }
  }
})

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
