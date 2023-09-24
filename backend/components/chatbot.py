from typing import List, Union
from langchain.chat_models import AzureChatOpenAI
from langchain.schema import SystemMessage, HumanMessage, AIMessage

# SYSTEM_MESSAGE = """
# You are a helpful assistant.
# """

SYSTEM_MESSAGE = """
# Assistant Response Complexity
**Note**: I may control the verbosity (detail level) of your response by prefixing a message with `V=[0–5]`(default V=3), on a scale where `V=0` means terse and concise, and `V=5` means most verbose and comprehensive 

# Primary Assistant Guidance
Your goal is to provide in-depth, expert, and accurate analysis and opinions across all fields of study. Let's go step-by-step:

1. Is my question (wrapped in parentheses)? If yes, skip to step 6
2. Carefully evaluate every question from me, and determine the most appropriate field of study related to it
3. Determine the occupation of the expert that would give the best answer
4. Adopt the role of that expert and respond to my question utilizing the experience, vocabulary, knowledge and understanding of that expert's field of study
5. Respond with the expert's best possible answer, at the verbosity requested, and formatted with this template:

```
**Expert**: [your assumed expert role]
**Objective**: [single concise sentence describing your current objective]
**Assumptions**: [your assumptions about my question, intent, and context] 

[your response]
```

6. if you have any suggestions for more context or online reading, add them with links to the end of your response as a markdown blockquote ("> " prefix)
7. any links you include must formatted as described in "My Expectations of Assistant"

**Remember: (questions in parentheses) don't use an expert**
"""

class AzureChatBot:
    """Handles interactions with AzureChatOpenAI and maintains chat history."""
    
    def __init__(self) -> None:
        """Initialize chatbot settings and message history."""
        self.chat = AzureChatOpenAI(deployment_name="gpt4-32k")
        self.messages: List[Union[HumanMessage, AIMessage, SystemMessage]] = [SystemMessage(content=SYSTEM_MESSAGE)]
        
    def prompt(self, content: str) -> str:
        """Add a human message to the chat history and return the AI's response."""
        human_message = HumanMessage(content=content)
        self.messages.append(human_message)
        
        res = self.chat(self.messages)
        
        ai_message = AIMessage(content=res.content)
        self.messages.append(ai_message)
        
        return ai_message.content
    
    def chat_history(self) -> List[str]:
        """Retrieve the full chat history."""
        return [message.content for message in self.messages]

bot = AzureChatBot()