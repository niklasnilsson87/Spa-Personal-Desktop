import { dragTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

/**
 * Class that creates a Div drag Web component.
 *
 * @class Drageble
 * @extends {window.HTMLElement}
 */
class Drageble extends window.HTMLElement {
  /**
   *Creates an instance of Drageble.
   * @memberof Drageble
   */
  constructor () {
    super()
    this.mouseOffset = { x: 0, y: 0 }
    this.isMouseDown = false
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(dragTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
    this.windowDrag()
  }

  /**
   * Method that holds the eventlisteners for each action.
   *
   * @memberof Drageble
   */
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

  /**
   * Method thats injects into the mousedown eventlistener to change postition of div.
   *
   * @param {Object} e Event sent from the eventlistener.
   * @memberof Drageble
   */
  onMouseDown (e) {
    this.isMouseDown = true
    this.mouseOffset = {
      x: this.container.offsetLeft - e.clientX,
      y: this.container.offsetTop - e.clientY
    }
  }

  /**
   *  Method thats injects into the mousemove eventlistener
   *  checks if mouse is down and start moving the div, and styles its opacity.
   *
   * @param {Object} e Event sent from the eventlistener.
   * @memberof Drageble
   */
  onMouseMove (e) {
    e.preventDefault()
    if (this.isMouseDown) {
      this.container.style.opacity = 0.5
      this.container.style.left = e.clientX + this.mouseOffset.x + 'px'
      this.container.style.top = e.clientY + this.mouseOffset.y + 'px'
    }
  }

  /**
   * Method thats injects into the mouseup eventlistener
   * turns the mousedown to false and sets the new value of opacity.
   *
   * @memberof Drageble
   */
  onMouseUp () {
    this.isMouseDown = false
    this.container.style.opacity = 1
  }
}

// creates element.
window.customElements.define('drageble-tag', Drageble)
