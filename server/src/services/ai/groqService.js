import dotenv from "dotenv";

dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({

  apiKey:
    process.env.GROQ_API_KEY,
});

export const askGroqAI =
  async (prompt) => {

    try {

      const completion =
        await groq.chat.completions.create({

          model:
            "llama-3.3-70b-versatile",

          messages: [

            {
              role: "system",

              content: `
You are DevSphere AI.

Generate:
- Project blueprints
- Folder structures
- Architecture
- API suggestions
- Database design
- Development roadmap
- Deployment strategies
- Technical recommendations

Respond professionally in markdown.
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
        "GROQ ERROR:",
        error.message
      );

      throw error;
    }
  };