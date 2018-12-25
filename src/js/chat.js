import { chatTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Chat extends window.HTMLElement {
  constructor () {
    super()
    this.apiKey = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))
    this.connectChat()
  }

  connectChat () {
    let chatDiv = this.shadowRoot.querySelector('#chatApp')
    console.log(chatDiv)
    chatDiv.addEventListener('keypress', (e) => {
      // listen for Enter Key
      if (e.keyCode === 13) {
        this.sendMessage(e.target.value)
        e.target.value = ''
        e.preventDefault()
      }
    })
  }

  sendMessage (text) {

  }

  printMessage () {

  }
}

window.customElements.define('chat-app', Chat)
