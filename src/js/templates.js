const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */ `
<drageble-tag>
  <div id="memoryContainer">
  
  <h1>Memory!</h1>
    <template>
      <div class="memory">
        <a href="#"><img src="image/memo/0.png" alt="a memory brick" /></a>
      </div>
    </template>
    <p class="win"></p>
  </div>
  
  
  </drageble-tag>
`

const weatherTemplate = document.createElement('template')
weatherTemplate.innerHTML = /* html */ `

  <drageble-tag>
    <div id="weather">
        <h1>Weather</h1>

          Enter City:<input id="city" value="kalmar" />
        <button id="submit">Submit</button>
        <div id="disp">
          <div id="temp"></div>
          <div id="imgW"></div>
          <div id="temp"></div>
          <div id="imgW"></div>
        </div>
    </div>
  </drageble-tag>
`

const dragTemplate = document.createElement('template')
dragTemplate.innerHTML = /* html */ `

  <div id="container">
  <div id="border-top"><a href="#"><img src="./image/Cbutton2.png" alt="closing button" /></a></div>
  <slot></slot>
  
  </div>
  </div>

`
export {
  memoryTemplate,
  weatherTemplate,
  dragTemplate
}
