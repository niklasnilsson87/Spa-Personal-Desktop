const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */ `

  <div id="container">
  <div id="border-top"><a href="#"><img src="./image/Cbutton2.png" alt="closing button" /></a></div>
  <div id="memoryContainer">
  
  <h1>Memory!</h1>
    <template>
      <div class="memory">
        <a href="#"><img src="image/memo/0.png" alt="a memory brick" /></a>
      </div>
    </template>
  </div>
  <p class="win"></p>
  </div>
`

const weatherTemplate = document.createElement('template')
weatherTemplate.innerHTML = /* html */ `

  <div id="container">
  <div id="border-top"><a href="#"><img src="./image/Cbutton2.png" alt="closing button" /></a></div>
  <div id="memoryContainer">
  
  <h1>Weather</h1>
    <input id="city" value="kalmar"></input>
  </div>
  <p class="win"></p>
  </div>
`
export {
  memoryTemplate,
  weatherTemplate
}
