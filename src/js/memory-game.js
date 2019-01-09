import { memoryTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Memory extends window.HTMLElement {
  constructor () {
    super()
    this.rows = 4
    this.cols = 4
    this.turn1 = ''
    this.turn2 = ''
    this.lastTile = ''
    this.pair = 0
    this.tries = 0
    this.tiles = []
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(memoryTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
  }

  connectedCallback () {
    this.memory()
  }

  memory () {
    this.createTimerSpan()
    this.setTimer()
    this.startTimer = Date.now()
    this.shuffle()

    let container = this.shadowRoot.querySelector('#memoryContainer')
    let templateDiv = this.shadowRoot.querySelectorAll('#memoryContainer template')[0]
      .content.firstElementChild

    let div = document.importNode(templateDiv, false)

    this.tiles.forEach((tile, index) => {
      let a = document.importNode(templateDiv.firstElementChild, true)
      a.firstElementChild.setAttribute('data-bricknumber', index)
      div.appendChild(a)
    })

    div.addEventListener('click', (e) => {
      e.preventDefault()
      let img = e.target.nodeName === 'IMG' ? e.target : e.target.firstElementChild
      let index = parseInt(img.getAttribute('data-bricknumber'))
      this.turnBrick(this.tiles[index], index, img)
    })

    container.appendChild(div)
  }

  turnBrick (tile, index, img) {
    if (this.turn2) { return }

    img.src = 'image/memo/' + tile + '.png'

    if (!this.turn1) {
      this.turn1 = img
      this.lastTile = tile
    } else {
      // second brick is clicked
      if (img === this.turn1) { return }
      this.tries += 1
      this.turn2 = img

      if (tile === this.lastTile) {
        // Found a pair

        this.pair += 1

        if (this.pair === (this.cols * this.rows) / 2) {
          this.youWin()
        }

        setTimeout(() => {
          this.turn1.parentNode.classList.add('remove')
          this.turn2.parentNode.classList.add('remove')

          this.turn1 = null
          this.turn2 = null
        }, 500)
      } else {
        setTimeout(() => {
          this.turn1.src = 'image/memo/0.png'
          this.turn2.src = 'image/memo/0.png'

          this.turn1 = null
          this.turn2 = null
        }, 500)
      }
    }
  }

  shuffle () {
    for (let i = 1; i <= (this.rows * this.cols) / 2; i++) {
      this.tiles.push(i)
      this.tiles.push(i)
    }
    for (let i = this.tiles.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = this.tiles[i]
      this.tiles[i] = this.tiles[j]
      this.tiles[j] = temp
    }
  }

  setTimer () {
    this.time = 0
    this.loadTimer = setInterval(() => {
      this.time += 0.1
      this.shadowRoot.querySelector('.time').textContent = this.time.toFixed(1)
    }, 100)
  }

  youWin () {
    this.timeResult()
    let p = this.shadowRoot.querySelector('.win')
    let memorydiv = this.shadowRoot.querySelector('.memory')
    let container = this.shadowRoot.querySelector('#memoryContainer')
    p.textContent = 'You Won on ' + this.tries + ' number of tries! and time: ' + this.totalTime + ' sec! Well done!'
    let restartButton = document.createElement('button')
    restartButton.classList = 'submit'
    restartButton.style.marginTop = 40 + 'px'
    p.appendChild(restartButton)
    restartButton.textContent = 'Restart'

    restartButton.addEventListener('click', e => {
      e.preventDefault()
      p.textContent = ''
      this.rows = 4
      this.cols = 4
      this.turn1 = null
      this.turn2 = null
      this.lastTile = ''
      this.pair = 0
      this.tries = 0
      this.tiles = []
      container.removeChild(memorydiv)
      this.memory()
    })
  }

  timeResult () {
    let timerSpan = this.shadowRoot.querySelector('.time')
    timerSpan.remove()
    clearInterval(this.loadTimer)
    this.stopTimer = Date.now()
    this.totalTime = (this.stopTimer - this.startTimer) / 1000
  }

  createTimerSpan () {
    let timer = document.createElement('span')
    timer.classList = 'time'
    let container = this.shadowRoot.querySelector('#memoryContainer')
    container.appendChild(timer)
  }
}

window.customElements.define('memory-game', Memory)
