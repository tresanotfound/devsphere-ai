import {
  askGroqAI,
} from "./groqService.js";

import {
  askOpenRouterAI,
} from "./openRouterService.js";

export const generateAIResponse =
  async (prompt) => {

    try {

      console.log(
        "Using GROQ AI..."
      );

      // PRIMARY AI
      return await askGroqAI(
        prompt
      );

    } catch (error) {

      console.log(
        "Groq failed. Switching to OpenRouter..."
      );

      try {

        // FALLBACK AI
        return await askOpenRouterAI(
          prompt
        );

      } catch (fallbackError) {

        console.log(
          "OpenRouter also failed:",
          fallbackError.message
        );

        return `
# ❌ AI Service Error

Both AI providers failed.

## Groq Error
${error.message}

## OpenRouter Error
${fallbackError.message}
`;
      }
    }
  };