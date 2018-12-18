import { memoryTemplate } from './memoryTemplate.js'

class Memory extends window.HTMLElement {
  constructor () {
    super()
    this.zIndex = 0
    this.rows = 4
    this.cols = 4
    this.turn1 = ''
    this.turn2 = ''
    this.lastTile = ''
    this.pair = 0
    this.tries = 0
    this.tiles = []
    this.mouseOffset = { x: 0, y: 0 }
    this.isMouseDown = false
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(memoryTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
    this.closeButton = this.shadowRoot.querySelector('#border-top a')
  }

  connectedCallback () {
    this.memory()
    this.container.addEventListener('mousedown', (e) => {
      this.onMouseDown(e)
    })
    document.body.addEventListener('mousemove', (e) => {
      this.onMouseMove(e)
    })
    this.container.addEventListener('mouseup', (e) => {
      this.onMouseUp(e)
    })
    this.closeButton.addEventListener('click', (e) => {
      this.clean()
    })
  }

  memory () {
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
          let p = this.shadowRoot.querySelector('.win')
          p.textContent = 'You Won on ' + this.tries + ' number of tries!'
          console.log('You Won on ' + this.tries + ' number of tries!')
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

  onMouseDown (e) {
    this.isMouseDown = true
    this.mouseOffset = {
      x: this.container.offsetLeft - e.clientX,
      y: this.container.offsetTop - e.clientY
    }
  }

  onMouseMove (e) {
    e.preventDefault()
    if (this.isMouseDown) {
      this.container.style.opacity = 0.5
      this.container.style.left = e.clientX + this.mouseOffset.x + 'px'
      this.container.style.top = e.clientY + this.mouseOffset.y + 'px'
    }
  }

  onMouseUp (e) {
    this.isMouseDown = false
    this.container.style.opacity = 1
    this.zIndex += 1
    this.container.style.zIndex = this.zIndex
    console.log(this.zIndex)
  }

  clean () {
    while (this.shadowRoot.firstChild) {
      this.shadowRoot.removeChild(this.shadowRoot.firstChild)
    }
  }
}

window.customElements.define('memory-game', Memory)
