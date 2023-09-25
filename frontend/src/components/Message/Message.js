import React from 'react'
import './Message.css'
import ReactMarkdown from 'react-markdown'

const Message = ({ sender, content }) => {
  if (sender === 'Chatbot' && content === 'Typing...') {
    return (
      <div className='message Chatbot'>
        <span className='waiting-indicator'>Chatbot is typing</span>
      </div>
    )
  }

  return (
    <div className={`message ${sender}`}>
      {sender === 'Chatbot' && (
        <img src='./r2d2.png' alt='bot' className='bot-image' />
      )}
      <p className='message-content'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </p>
    </div>
  )
}

export default Message
