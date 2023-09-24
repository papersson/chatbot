from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

def get_azure_secret():
    credential = DefaultAzureCredential()
    secret_client = SecretClient(vault_url="https://kv-gde-main-dev.vault.azure.net/", credential=credential)

    # AZURE_OPENAI_ENDPOINT = secret_client.get_secret("OpenAIEastUSEndpoint").value
    # AZURE_OPENAI_KEY = secret_client.get_secret("OpenAIEastUSKey").value

    AZURE_OPENAI_ENDPOINT = "https://oai-gpt4-qna-poc.openai.azure.com"
    AZURE_OPENAI_KEY = "595ea12c831c4b89aaa04ca80acdd156"

    print("Retrieved Azure secret.")

    return AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY
