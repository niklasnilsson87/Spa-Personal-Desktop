const mainCSS = document.createElement('template')
mainCSS.innerHTML = /* html */`
<style>
#container {
  width: auto;
  height: auto;
  background-color: white;
  position: absolute;
  border: 5px solid;
  border-color: lightblue;
  border-radius: 22px;
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

#submit {
  display: inline-block;
  padding: 15px 25px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #00FF7F;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px #999;
}

#submit:hover {
  background-color: #add8e6
}

#submit:active {
  background-color: #3e8e41;
  box-shadow: 0 2px #666;
  transform: translateY(4px);
}

.weather_p {
  margin: 20px 20px 0px;
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
  width: 460px;
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
}

#weather h1 {
  margin-bottom: 30px;
}

#disp {
  padding: 20px;
  font-size: 40px;
  display: inline-block;
  margin: 20px 25px 0px;
  border-radius: 16px;
  width: 80%;
  background-image: linear-gradient(to bottom right, white, lightblue);
}

#dispCity {
  float: left;
  font-size: 40px;
}

#temp {
  margin-top: 5px;
  float: left;
}

#cont1 {
  height: 180px;
  float: right;
  width: 170px;
 
}

.condition {
  display: inline-block;
  font-family: cursive;
  font-size: 16px;
}

.weather_img {
  margin-top: 20px;
  width: 70px;
}

#city {
  margin-top: 10px;
  margin-right: 20px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  transition: .5s ease;
}

#city:focus {
  box-shadow: none;
  border-bottom: 2px solid #222;
  outline: none;
  transition: 0.4s ease-in-out;
}

#chatApp {
  width: 460px;
  height: 300px;
}
</style>
`
export {
  mainCSS
}
