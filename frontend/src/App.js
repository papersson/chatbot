import React from 'react'
import Header from './components/Header/Header'
import MessageList from './components/MessageList/MessageList'
import ChatInput from './components/ChatInput/ChatInput'
import useChatState from './hooks/useChatState'
import useChatInput from './hooks/useChatInput'
import useChatApi from './hooks/useChatApi'
import './App.css'

function App() {
  const { messages, setMessages } = useChatState()
  const { userInput, resetInput, handleUserInput } = useChatInput()
  const { isWaitingForResponse, handleSendMessage } = useChatApi()

  const handleKeyDown = async e => {
    if (e.keyCode === 13 && userInput.trim() !== '' && !isWaitingForResponse) {
      resetInput()
      await handleSendMessage(userInput, setMessages)
    }
  }

  return (
    <div className='App'>
      <Header />
      <MessageList messages={messages} />
      <ChatInput
        userInput={userInput}
        handleUserInput={handleUserInput}
        handleKeyDown={handleKeyDown}
        isDisabled={isWaitingForResponse}
      />
    </div>
  )
}

export default App
