const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */ `
<style>
#container {
  width: 200px;
  height: 270px;
  background-color: white;
  position: absolute;
  border-style: solid;
  border-color: lightgray;
  border-radius: 20px;
  margin-top: 20px;
  z-index: -1;
}

.border-top {
  height: 20px;
  border-bottom: solid;
  border-color: orange;
  background-color: lightblue;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

h1 {
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
  text-align: center;
  font-family: helvetica;
}
</style>
  <div id="container">
  <div class="border-top"></div>
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
