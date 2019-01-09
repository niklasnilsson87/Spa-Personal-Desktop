import { dragTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Drageble extends window.HTMLElement {
  constructor () {
    super()
    this.mouseOffset = { x: 0, y: 0 }
    this.isMouseDown = false
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(dragTemplate.content.cloneNode(true))
    this.closeButton = this.shadowRoot.querySelector('#border-top a')
    this.container = this.shadowRoot.querySelector('#container')
    this.windowDrag()
  }

  windowDrag () {
    this.container.addEventListener('mousedown', (e) => {
      this.onMouseDown(e)
    })
    document.body.addEventListener('mousemove', (e) => {
      this.onMouseMove(e)
    })
    this.container.addEventListener('mouseup', (e) => {
      this.onMouseUp(e)
    })
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
  }
}

window.customElements.define('drageble-tag', Drageble)
