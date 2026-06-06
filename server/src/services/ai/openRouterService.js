import dotenv from "dotenv";

dotenv.config();

import OpenAI from "openai";

/* =========================================
   OPENROUTER CLIENT
========================================= */

const client =
  new OpenAI({

    baseURL:
      "https://openrouter.ai/api/v1",

    apiKey:
      process.env.OPENROUTER_API_KEY,
  });

/* =========================================
   OPENROUTER AI SERVICE
========================================= */

export const askOpenRouterAI =
  async (prompt) => {

    try {

      const completion =
        await client.chat.completions.create({

          model:
            "qwen/qwen3-32b:free",

          messages: [

            {
              role: "system",

              content: `
You are DevSphere AI.

You generate:
- SaaS blueprints
- Enterprise architecture
- MERN stack planning
- APIs
- Database structures
- Scalable systems
- AI product ideas
- Deployment workflows

Always respond in professional markdown.
`,
            },

            {
              role: "user",

              content:
                prompt,
            },
          ],

          temperature: 0.7,

          max_tokens: 4000,
        });

      return completion
        .choices[0]
        .message.content;

    } catch (error) {

      console.log(
        "OPENROUTER ERROR:",
        error.message
      );

      throw error;
    }
  };