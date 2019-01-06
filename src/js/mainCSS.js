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
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
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

.win {
  margin-top: 10px;
  font-size: 20px
}

p {
  float: right;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: helvetica;
  cursor: default;
}

.submit {
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
  border-radius: 45px;
  box-shadow: 0 3px #999;
}

.submit:hover {
  background-color: #add8e6
}

.submit:active {
  background-color: #3e8e41;
  box-shadow: 0 2px #666;
  transform: translateY(4px);
}

.weather_p {
  margin-left: 120px;
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
  padding: 10px;
  width: 480px;
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
}

#weather h1 {
  font-family: "Segoe print", Arial, Helvetica, sans-serif;
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
  margin-left: 60px;
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

.chatApp {
  background-image: linear-gradient(to bottom right, lightblue, lightgreen);
  width: 460px;
  height: 400px;
}

.messages {
  margin-left: 20px;
  border-bottom: 1px solid;
  display: block;
  height: 300px;
  overflow: auto;
  overflow-x: hidden;
}

.message {
  display: table;
  margin-bottom: 15px;
}

.messageArea {
  outline: none;
  border-radius: 10px;
  position: absolute;
  bottom: 2px;
  left: 30px;
  width: 400px;
  height: 50px;
}

.text {
  text-align: left;
  float: left;
  font-family: sans-serif;
  margin: 0px;
  padding: 10px;
}

.autor {
  float: left;
  background-color: lightgray;
  border-radius: 5px;
  margin: 0px;
  padding: 10px;
  font-size: 12px;
  font-family: monospace;
}

#card {
  text-align: center;
}

::-webkit-scrollbar{
    width: 16px;
    height: 10px;
    margin-right:2px;
    border-radius:20px;


}
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
    border: 1px solid lightblue;
    background: lightblue;
    border-radius: 30px;
    margin-right:2px;

}
::-webkit-scrollbar-thumb{
    border-radius:20px;
    height: 30px;
    width: 8px;
    border: 1px solid lightblue;
    background: rgb(111,111,111);
    background: -webkit-linear-gradient(#e66465, #9198e5);
}
::-webkit-scrollbar-track-piece {
    height: 30px;
    width: 30px;
    border-radius:20px;
}
</style>
`
export {
  mainCSS
}
