import { useState } from 'react'

const useChatInput = () => {
  const [userInput, setUserInput] = useState('')

  const resetInput = () => {
    setUserInput('')
  }

  const handleUserInput = newInput => {
    setUserInput(newInput)
  }

  return { userInput, resetInput, handleUserInput }
}

export default useChatInput
