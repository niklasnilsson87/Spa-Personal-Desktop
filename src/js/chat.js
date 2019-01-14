import { chatTemplate, welcomeTemplate, containerTemplate } from './templates.js'
import { mainCSS } from './mainCSS.js'

/**
 * Class that creates the chat web component.
 *
 * @class Chat
 * @extends {window.HTMLElement}
 */
class Chat extends window.HTMLElement {
  /**
   *Creates an instance of Chat.
   * @memberof Chat
   */
  constructor () {
    super()
    this.socket = null
    this.apiKey = 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(mainCSS.content.cloneNode(true))
    this.shadowRoot.appendChild(containerTemplate.content.cloneNode(true))
  }

  /**
 * Starting point of the application.
 *
 * @memberof Chat
 */
  connectedCallback () {
    this.beginChat()
  }

  disconnectedCallback () {
    this.socket.removeEventListener('open', this.onOpenSocket)
    this.socket.removeEventListener('message', this.onMessage)
  }

  /**
   *
   *
   * @returns
   * @Error {Error}
   * @memberof Chat
   */
  connectChat () {
    return new Promise((resolve, reject) => {
      if (this.socket && this.socket.readyState === 1) {
        resolve(this.socket)
        return
      }

      this.socket = new window.WebSocket('ws://vhost3.lnu.se:20080/socket/')

      this.onOpenSocket = e => resolve(this.socket)

      this.socket.addEventListener('open', this.onOpenSocket)

      this.socket.addEventListener('error', e => {
        reject(new Error('could not connect to server'))
      })

      this.onMessage = e => {
        let message = JSON.parse(e.data)
        if (message.type === 'message') {
          this.storage(message.username, message.data)
          this.printMessage(message)
        }
      }

      this.socket.addEventListener('message', this.onMessage)
    })
  }

  /**
   * Starting point template where user selects the nickname
   * or if nickname exist, run the chat
   *
   * @memberof Chat
   */
  beginChat () {
    if (window.localStorage.hasOwnProperty('user')) {
      let id = window.localStorage.getItem('user')
      let user = JSON.parse(id)
      this.nickname = user.username
      this.startChat()
    } else {
      this.shadowRoot.querySelector('#chat-container').appendChild(welcomeTemplate.content.cloneNode(true))
      let inputButton = this.shadowRoot.querySelector('#start_chat_button')

      inputButton.addEventListener('click', e => {
        e.preventDefault()
        this.nickname = this.shadowRoot.querySelector('#startInput').value

        if (this.nickname) {
          this.storageUser()
          this.startChat()
        }
      })
    }
  }

  /**
   * Method that handles the text that is written and sends it to the socket
   *
   * @param {string} text Text that is sent by the user in chat.
   * @memberof Chat
   */
  sendMessage (text) {
    let data = {
      type: 'message',
      data: text,
      username: this.nickname,
      channel: '',
      key: this.apiKey
    }

    this.connectChat().then(socket => {
      socket.send(JSON.stringify(data))
    }).catch(error => {
      console.log('something went wrog', error)
    })
  }

  formatDate (date) {
    return date.toLocaleTimeString() + ' ' + date.toDateString()
  }

  /**
   * Method takes the object and prints the data, user and time to the imported template.
   *
   * @param {object} message takes the message and prints the data to the chat application.
   * @memberof Chat
   */
  printMessage (message) {
    let template = this.chatDiv.querySelectorAll('template')[0]
    let date = message.date ? this.formatDate(new Date(message.date)) : this.formatDate(new Date())

    let messageDiv = document.importNode(template.content.firstElementChild, true)
    messageDiv.querySelectorAll('.text')[0].textContent = message.data
    messageDiv.querySelectorAll('.autor')[0].textContent = `${message.username} ${date}`

    let printDiv = this.shadowRoot.querySelectorAll('.messages')[0]
    printDiv.appendChild(messageDiv)

    // starts scrollbar at bottom of div.
    let elementHeight = printDiv.scrollHeight
    printDiv.scrollTop = elementHeight
  }

  /**
   * Method that imports the chat template and listens for enterkey to send
   * the text.
   *
   * @memberof Chat
   */
  startChat () {
    this.clean()
    this.shadowRoot.querySelector('#chat-container').appendChild(chatTemplate.content.cloneNode(true))
    this.chatDiv = this.shadowRoot.querySelector('.chatApp')
    this.getStorage()
    this.connectChat().then(() => {
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

  /**
   * Method that saves the username, text and the current time to localstorage.
   *
   * @param {string} username the username to store
   * @param {string} data the text to store
   * @memberof Chat
   */
  storage (username, data) {
    const newPost = {
      username: username,
      data: data,
      date: new Date().getTime()
    }

    const saveddata = window.localStorage.getItem('chat') || '[]'

    const history = JSON.parse(saveddata)

    if (history.some(post => this.isSamePost(post, newPost))) return

    const chatHistory = [...history, newPost]
      .sort((a, b) => Number(b.date) - Number(a.date))
      .slice(0, 10)

    window.localStorage.setItem('chat', JSON.stringify(chatHistory))
  }

  isSamePost (post, newPost) {
    return post.username === newPost.username &&
    post.data === newPost.data &&
    post.date.toString().substring(0, 11) === newPost.date.toString().substring(0, 11)
  }

  /**
   *
   *
   * @memberof Chat
   */
  getStorage () {
    if (window.localStorage.getItem('chat')) {
      let messages = window.localStorage.getItem('chat')
      this.messages = JSON.parse(messages)

      this.messages
        .sort((a, b) => Number(a.date) - Number(b.date))
        .map(message => this.printMessage(message))
    }
  }

  storageUser () {
    const user = {
      username: this.nickname
    }

    window.localStorage.setItem('user', JSON.stringify(user))
  }

  clean () {
    const container = this.shadowRoot.querySelector('#chat-container')
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
  }
}
window.customElements.define('chat-app', Chat)
