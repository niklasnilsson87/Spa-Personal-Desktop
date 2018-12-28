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
      <p class='weather_p'><input id="city" value="Kalmar" /></p>
      <button id="submit">Submit</button>
      <div id="disp">
        <div id="cont1">
          <p id="condition1" class="condition"></p><br>
          <p id="condition3" class="condition"></p><br>
          <p id="condition2" class="condition"></p><br>
        </div>
        <p id="dispCity"></p>
        <p id="temp"></p>
          
      </div>
    </div>
  </drageble-tag>
`

const dragTemplate = document.createElement('template')
dragTemplate.innerHTML = /* html */ `

  <div id="container">
  <div id="border-top"><a href="#"><img src="./image/Cbutton2.png" class="close_button" alt="closing button" /></a></div>
  <slot></slot>
  
  </div>
  </div>

`

const chatTemplate = document.createElement('template')
chatTemplate.innerHTML = /* html */ `

  <drageble-tag>
    <div id="chatApp">
      <h1>chat</h1>

        <div id="chatcontainer"></div>

          
            <div class="chat">
              <div class="messages">
                <template>
                  <div class="message">
                    <p class="autor"></p><br>
                    <p class="text"></p>
                  </div>
                </template>
              </div>
              <textarea class="messageArea"></textarea>
            </div>
         

    </div>
  </drageble-tag>
`
export {
  chatTemplate,
  memoryTemplate,
  weatherTemplate,
  dragTemplate
}
