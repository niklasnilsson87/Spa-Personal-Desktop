import { weatherTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Weather extends window.HTMLElement {
  constructor () {
    super()
    this.aipKey = '&APPID=ba59d28f9f13f728e9b8884984882a98'
    // this.city = 'london'
    this.api = 'http://api.openweathermap.org/data/2.5/weather?q='
    this.units = '&units=metric'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(weatherTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
    this.city = this.shadowRoot.querySelector('#city')
  }

  connectedCallback () {
    this.getInputValue()
  }

  async getWeather () {
    this.weather = await window.fetch(this.api + this.city.value + this.units + this.aipKey)
    this.weather = await this.weather.json()
    this.shadowRoot.querySelector('#temp').textContent = `${this.weather.main.temp}°C`
    // this.shadowRoot.querySelector('#imgW').textContent = `${this.weather.weather[0].icon}.png`
  }

  getInputValue () {
    let submit = this.shadowRoot.querySelector('#submit')

    submit.addEventListener('click', e => {
      this.getWeather()
    })
  }
}

window.customElements.define('weather-app', Weather)
