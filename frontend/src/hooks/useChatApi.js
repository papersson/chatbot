import { useState } from 'react'
import { sendMessageToBot } from '../services/chatApi'

const useChatApi = () => {
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false)

  const handleSendMessage = async (userInput, setMessages) => {
    // Step 1: Add user message to messages state immediately
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'User', content: userInput },
    ])

    // Step 2: Add a "typing indicator" message from the bot
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'Chatbot', content: 'Typing...' },
    ])

    // Step 3: Make API call to get bot response
    setIsWaitingForResponse(true)
    const botResponse = await sendMessageToBot(userInput)

    // Step 4: Replace "typing indicator" with actual bot response
    if (botResponse !== null) {
      setMessages(prevMessages => {
        // Remove the last message (the typing indicator)
        const newMessages = prevMessages.slice(0, -1)
        // Append the actual bot response
        newMessages.push({ sender: 'Chatbot', content: botResponse })
        return newMessages
      })
    }

    setIsWaitingForResponse(false)
  }

  return { isWaitingForResponse, handleSendMessage }
}

export default useChatApi
