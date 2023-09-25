import { useState } from 'react'

const useChatState = () => {
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', content: 'Hello! How can I assist you today?' },
  ])
  // const [userInput, setUserInput] = useState('')
  // const [isTyping, setIsTyping] = useState(false)

  return {
    messages,
    setMessages,
    // userInput,
    // setUserInput,
    // isTyping,
    // setIsTyping,
  }
}

export default useChatState
