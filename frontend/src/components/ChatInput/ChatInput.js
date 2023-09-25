import React, { useRef, useEffect } from 'react'
import './ChatInput.css'

const ChatInput = ({
  userInput,
  handleUserInput,
  handleKeyDown,
  isDisabled,
}) => {
  const textareaRef = useRef(null)
  let isResizing = false

  const handleInput = e => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`
    handleUserInput(e.target.value)
  }

  useEffect(() => {
    const handleMouseDown = () => {
      isResizing = true
    }

    const handleMouseMove = e => {
      if (isResizing) {
        const newHeight = window.innerHeight - e.clientY
        if (newHeight >= 50 && newHeight <= 300) {
          textareaRef.current.style.height = `${newHeight}px`
        }
      }
    }

    const handleMouseUp = () => {
      isResizing = false
    }

    const resizeHandle = document.querySelector('.resize-handle')
    resizeHandle.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className='chat-input-wrapper'>
      <div className='resize-handle' />
      <textarea
        ref={textareaRef}
        value={userInput}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        className='chat-input'
        disabled={isDisabled}
      />
    </div>
  )
}

export default ChatInput
