const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */ `
<style>
#container {
  width: 200px;
  height: auto;
  background-color: white;
  position: absolute;
  border-radius: 16px;
  z-index: 0;
}

#border-top {
  width: auto;
  height: 20px;
  border-bottom: solid;
  border-color: orange;
  background-color: lightblue;
  border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

h1 {
  cursor: default;
  margin: 0 auto;
  text-align: center;
}

#memoryContainer {
    margin: 0 auto;
    width: 80%;
  }

  .memory img {
    width: 25%;
  }

.memory .remove {
  visibility: hidden;
}

p {
  float: right;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: helvetica;
  cursor: default;
}

#border-top img {
  float: right;
  width: 15px;
  margin-right: 6px;
  margin-top: 3px;
}
</style>
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
export {
  memoryTemplate
}
