import { chatTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

class Chat extends window.HTMLElement {
  constructor () {
    super()
    this.socket = null
    this.apiKey = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))
    this.chatDiv = this.shadowRoot.querySelector('#chatApp')
    this.date = new Date().toLocaleTimeString() + ' ' + new Date().toDateString()
    console.log(this.date)
    this.connectChat().then(socket => {
      this.sendMessage()
    })
    this.chatDiv.addEventListener('keypress', (e) => {
      // listen for Enter Key
      if (e.keyCode === 13) {
        this.sendMessage(e.target.value)
        e.target.value = ''
        e.preventDefault()
      }
    })
  }

  connectChat () {
    return new Promise((resolve, reject) => {
      if (this.socket && this.socket.readyState === 1) {
        resolve(this.socket)
        return
      }

      this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')

      this.socket.addEventListener('open', e => {
        resolve(this.socket)
      })

      this.socket.addEventListener('error', e => {
        reject(new Error('could not connect to server'))
      })

      this.socket.addEventListener('message', e => {
        let message = JSON.parse(e.data)
        if (message.type === 'message') {
          this.printMessage(message)
        }
      })
    })
  }

  sendMessage (text) {
    let data = {
      type: 'message',
      data: text,
      username: 'Nilsson',
      channel: '',
      key: this.apiKey
    }

    this.connectChat().then(socket => {
      socket.send(JSON.stringify(data))
    }).catch(error => {
      console.log('something went wrog', error)
    })
  }

  printMessage (message) {
    let template = this.chatDiv.querySelectorAll('template')[0]

    let messageDiv = document.importNode(template.content.firstElementChild, true)

    messageDiv.querySelectorAll('.text')[0].textContent = message.data
    messageDiv.querySelectorAll('.autor')[0].textContent = `${message.username} ${this.date}`

    let printDiv = this.shadowRoot.querySelectorAll('.messages')[0]
    printDiv.appendChild(messageDiv)

    // starts scrollbar at bottom of div.
    let elementHeight = printDiv.scrollHeight
    printDiv.scrollTop = elementHeight
    this.storage(message.username, message.data)
  }

  storage (username, data) {
    const result = {
      username: username,
      data: data,
      date: new Date().toLocaleTimeString()
    }

    const savedScores = window.localStorage.getItem('highscore') || '[]'

    const highscores = [...JSON.parse(savedScores), result]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 5)

    window.localStorage.setItem('highscore', JSON.stringify(highscores))
  }
}
window.customElements.define('chat-app', Chat)
