import {
  askGroqAI,
} from "./groqService.js";

import {
  askOpenRouterAI,
} from "./openRouterService.js";

/* =========================================
   STREAMING AI GATEWAY
========================================= */

export const generateAIResponse =
  async (
    prompt,
    onChunk
  ) => {

    try {

      console.log(
        "Using GROQ AI..."
      );

      /* =========================================
         PRIMARY AI
      ========================================= */

      return await askGroqAI(
        prompt,
        onChunk
      );

    } catch (error) {

      console.log(
        "Groq failed. Switching to OpenRouter..."
      );

      try {

        /* =========================================
           FALLBACK AI
        ========================================= */

        return await askOpenRouterAI(
          prompt,
          onChunk
        );

      } catch (fallbackError) {

        console.log(
          "OpenRouter also failed:",
          fallbackError.message
        );

        const errorMessage = `
# ❌ AI Service Error

Both AI providers failed.

## Groq Error

${error.message}

## OpenRouter Error

${fallbackError.message}
`;

        if (onChunk) {

          onChunk(
            errorMessage
          );
        }

        return errorMessage;
      }
    }
  };