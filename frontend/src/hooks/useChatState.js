import { useState } from 'react'

const useChatState = () => {
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', content: 'What do you want from me' },
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
