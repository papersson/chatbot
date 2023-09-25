import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import './MessageList.css'

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className='message-list-wrapper'>
      <div className='message-list'>
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default MessageList
