class Weather extends window.HTMLElement {
  constructor () {
    super()
    this.aipKey = 'ba59d28f9f13f728e9b8884984882a98'
    this.getWeather()
  }

  connectedCallback () {

  }

  async getWeather () {
    this.weather = await window.fetch('http://api.openweathermap.org/data/2.5/weather?q=kalmar&units=metric&APPID=ba59d28f9f13f728e9b8884984882a98&lang=se')
    this.weather = await this.weather.json()
    console.log(this.weather.main.temp)
  }
}

window.customElements.define('weather-app', Weather)
