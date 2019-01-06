import { weatherTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Weather extends window.HTMLElement {
  constructor () {
    super()
    this.aipKey = '&APPID=ba59d28f9f13f728e9b8884984882a98'
    this.api = 'http://api.openweathermap.org/data/2.5/weather?q='
    this.units = '&units=metric'
    this.language = '&lang=se'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(weatherTemplate.content.cloneNode(true))
    this.container = this.shadowRoot.querySelector('#container')
    this.city = this.shadowRoot.querySelector('#city')
    this.tempID = this.shadowRoot.querySelector('#temp')
    this.dispCity = this.shadowRoot.querySelector('#dispCity')
    this.condition1 = this.shadowRoot.querySelector('#condition1')
    this.condition2 = this.shadowRoot.querySelector('#condition2')
    this.condition3 = this.shadowRoot.querySelector('#condition3')
    this.noExist = this.shadowRoot.querySelector('.weather_p')
    this.getWeather()
    this.getInputValue()
  }

  async getWeather () {
    this.weather = await window.fetch(this.api + this.city.value + this.units + this.aipKey + this.language)
    this.weather = await this.weather.json()

    if (this.weather.cod === 200) {
      this.createContent()
    } else {
      this.noExist.textContent = 'city does not exist'
      this.getInputValue()
    }
  }

  getInputValue () {
    let submit = this.shadowRoot.querySelector('#submit')

    submit.addEventListener('click', e => {
      e.preventDefault()
      this.noExist.textContent = ''
      this.getWeather()
    })
  }

  createContent () {
    if (this.img) {
      this.img.src = ''
    }
    this.tempID.textContent = `${Math.floor(this.weather.main.temp)}°C`
    this.img = document.createElement('img')
    this.img.src = `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
    this.img.alt = 'weather icon'
    this.img.classList = 'weather_img'
    this.tempID.appendChild(this.img)
    this.dispCity.textContent = this.weather.name
    this.condition1.textContent = `Luftfuktighet: ${this.weather.main.humidity}%`
    this.condition2.textContent = this.weather.weather[0].description
    this.condition3.textContent = `Vind: ${this.weather.wind.speed} m/s`
  }
}
window.customElements.define('weather-app', Weather)
