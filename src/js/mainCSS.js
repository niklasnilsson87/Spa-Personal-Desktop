const mainCSS = document.createElement('template')
mainCSS.innerHTML = /* html */`
<style>
#container {
  width: auto;
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
  padding: 30px;
  margin: 0 auto;
  width: 300px;
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

.weather_p {
  float: left;
  font-family: helvetica;
}

#border-top img {
  float: right;
  width: 15px;
  margin-right: 6px;
  margin-top: 3px;
}

#weather {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin: 0 auto;
  padding: 30px;
  width: 400px;
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
}

#disp {
  padding: 20px;
  font-size: 40px;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  border-radius: 16px;
  width: 80%;
  background-image: linear-gradient(to bottom right, white, lightblue);
}

#dispCity {
  float: left;
  font-size: 40px;
}

#temp {
 float: left;
}

.condition {
  display: block;
  margin-top: 10px;
  float: right;
  font-size: 20px;
}

#temp img {
  width: 70px;
}
</style>
`
export {
  mainCSS
}
