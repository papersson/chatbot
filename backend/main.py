from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from config import chatbot_config
from components.chatbot import bot

app = FastAPI()

class ChatMessage(BaseModel):
    content: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/chat/")
def chat(message: ChatMessage):
    user_input = message.content
    bot_response = bot.prompt(user_input)
    return {"bot_response": bot_response}

# uvicorn main:app --reload