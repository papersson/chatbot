import React, { useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', content: 'Hello! How can I assist you today?' },
  ])
  const [userInput, setUserInput] = useState('')
  const [isTyping, setIsTyping] = useState(false) // New state for typing indicator

  // Function to handle Enter key press
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleSendMessage()
    }
  }

  const handleSendMessage = async () => {
    setUserInput('')
    if (userInput.trim() === '') return
    setMessages([...messages, { sender: 'User', content: userInput.trim() }])
    setIsTyping(true) // Set typing indicator to true

    try {
      const response = await axios.post('http://localhost:8000/chat/', {
        content: userInput.trim(),
      })
      const botResponse = response.data.bot_response
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'Chatbot', content: botResponse },
      ])
    } catch (error) {
      console.error('Error fetching chatbot response:', error)
    }

    setIsTyping(false) // Set typing indicator to false
    setUserInput('') // Clear the input field
  }

  return (
    <div className='App'>
      <header className='App-header'>JeppeBot (Beep Bop)</header>
      <div className='chat-area'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={'message ' + message.sender.toLowerCase()}
          >
            <div className='message-content'>
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className='message chatbot'>
            <div className='message-content'>Chatbot is typing...</div>
          </div>
        )}
      </div>
      <div className='input-area'>
        <div className='input-wrapper'>
          {' '}
          {/* New wrapper div */}
          <textarea
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type your message here...'
          />
          {/* <button onClick={handleSendMessage}>Send</button> */}
        </div>
      </div>
    </div>
  )
}

export default App
