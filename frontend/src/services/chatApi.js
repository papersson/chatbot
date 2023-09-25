import axios from 'axios'

export const sendMessageToBot = async userInput => {
  try {
    const response = await axios.post('http://localhost:8000/chat/', {
      content: userInput.trim(),
    })
    return response.data.bot_response
  } catch (error) {
    console.error('Error fetching chatbot response:', error)
    return null
  }
}
