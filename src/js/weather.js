import { weatherTemplate } from './memoryTemplate.js'
import { mainCSS } from './mainCSS.js'

class Weather extends window.HTMLElement {
  constructor () {
    super()
    this.aipKey = 'ba59d28f9f13f728e9b8884984882a98'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(weatherTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
    this.closeButton = this.shadowRoot.querySelector('#border-top a')
  }

  connectedCallback () {
    this.getWeather()
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

  async getWeather () {
    this.weather = await window.fetch('http://api.openweathermap.org/data/2.5/weather?q=kalmar&units=metric&APPID=ba59d28f9f13f728e9b8884984882a98&lang=se')
    this.weather = await this.weather.json()
    console.log(this.weather.main.temp)
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

window.customElements.define('weather-app', Weather)
