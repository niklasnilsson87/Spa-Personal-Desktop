import { weatherTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

/**
 * Class that creates the Weather web component.
 *
 * @class Weather
 * @extends {window.HTMLElement}
 */
class Weather extends window.HTMLElement {
  /**
   *Creates an instance of Weather.
   * @memberof Weather
   */
  constructor () {
    super()
    this.apiKey = '&APPID=ba59d28f9f13f728e9b8884984882a98'
    this.api = 'http://api.openweathermap.org/data/2.5/weather?q='
    this.units = '&units=metric'
    this.language = '&lang=se'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(weatherTemplate.content.cloneNode(true))
    this.container = this.query('#container')
    this.city = this.query('.city')
    this.tempID = this.query('#temp')
    this.dispCity = this.query('#dispCity')
    this.condition1 = this.query('#condition1')
    this.condition2 = this.query('#condition2')
    this.condition3 = this.query('#condition3')
    this.noExist = this.query('.weather_p')
  }

  /**
   *  Method that querys from the shadowRoot.
   *
   * @param {String} query
   * @returns path to shadowRoot.
   * @memberof Weather
   */
  query (query) {
    return this.shadowRoot.querySelector(query)
  }

  /**
   * Starting point of the application.
   *
   * @memberof Weather
   */
  connectedCallback () {
    this.getWeather()
    this.getInputValue()
  }

  /**
   * Method to get weather from openweathermap.com.
   *
   * @memberof Weather
   */
  async getWeather () {
    this.weather = await window.fetch(this.api + this.city.value + this.units + this.apiKey + this.language)
    this.weather = await this.weather.json()

    if (this.weather.cod === 200) {
      this.createContent()
    } else {
      this.noExist.textContent = 'Try again'
      setTimeout(() => {
        this.noExist.textContent = ''
      }, 1000)
    }
  }

  /**
   * Method that listens for new inputs for weather search.
   *
   * @memberof Weather
   */
  getInputValue () {
    let submit = this.shadowRoot.querySelector('.submit')

    submit.addEventListener('click', e => {
      e.preventDefault()
      this.noExist.textContent = ''
      this.getWeather()
    })
  }

  /**
   * Method that creates content for the application.
   *
   * @memberof Weather
   */
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

// creates element.
window.customElements.define('weather-app', Weather)
