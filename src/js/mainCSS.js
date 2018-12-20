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
  width: 300px;
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
}

#disp {
  margin-top: 20px;
  display: inline-block;
}

#temp {
  padding: 0;
  font-size: 40px;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  border-radius: 16px;
  width: 130px;
  height: 60px;
  background-image: linear-gradient(to bottom right, white, lightblue);
}

#imgW {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto;
  border-radius: 16px;
  width: 130px;
  height: 60px;
  background-image: linear-gradient(to bottom right, white, orange);
}

#imgW img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
`
export {
  mainCSS
}
