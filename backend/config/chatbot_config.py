import os
from .utils import get_azure_secret

AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY = get_azure_secret()

os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_BASE"] = AZURE_OPENAI_ENDPOINT
os.environ["OPENAI_API_KEY"] = AZURE_OPENAI_KEY
os.environ["OPENAI_API_VERSION"] = "2023-05-15"

print("Chatbot configured.")