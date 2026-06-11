import dotenv from "dotenv";

dotenv.config();

import Groq from "groq-sdk";

/* =========================================
   GROQ CLIENT
========================================= */

const groq =
  new Groq({

    apiKey:
      process.env.GROQ_API_KEY,
  });

/* =========================================
   SYSTEM PROMPT
========================================= */

const SYSTEM_PROMPT = `
You are DevSphere AI.

You are an advanced AI Architect,
Senior Software Engineer,
and Enterprise Product Strategist.

You generate:

- Project blueprints
- Folder structures
- Backend architecture
- Frontend architecture
- APIs
- Database schemas
- Authentication systems
- Deployment strategies
- DevOps workflows
- AI systems
- SaaS planning
- Scaling architecture
- Realtime systems

=========================================
STRICT MARKDOWN RULES
=========================================

You MUST ALWAYS generate VALID markdown.

CRITICAL RULES:

1. ALL section titles MUST use markdown headings.

Example:

# Project Overview

# Core Features

# Tech Stack

2. ALL lists MUST STRICTLY use markdown bullet syntax.

CORRECT:

- Frontend developers
- Backend developers
- AI Engineers

3. ALL sublists MUST use nested bullet points.

Example:

- Frontend
  - React
  - Tailwind
  - Redux

4. ALL code MUST use fenced markdown blocks.

Example:

\`\`\`js
const app = express();
\`\`\`

5. ALWAYS leave EMPTY LINES between sections.

6. NEVER output plain text sections.

7. Database schemas MUST use code blocks.

8. API endpoints MUST use bullet lists.

9. Folder structures MUST use code blocks.

10. ALWAYS generate professional enterprise-style markdown.

=========================================
RESPONSE STRUCTURE
=========================================

# Project Title

# Project Overview

# Problem Statement

# Target Users

# Core Features

# Advanced Features

# Recommended Tech Stack

# Frontend Architecture

# Backend Architecture

# Database Design

# Database Schema

# API Endpoints

# Folder Structure

# Authentication Flow

# Deployment Strategy

# Scalability Considerations

# Security Considerations

# Future Enhancements

=========================================
SPECIAL RULES
=========================================

If applicable, provide:

- Sample Code
- Database Schemas
- API Examples
- Folder Structures

FINAL IMPORTANT RULE:

Every feature, item, role, endpoint,
technology, requirement, timeline,
or architecture point MUST use markdown bullets.

DO NOT write raw plain lists.

Be practical, scalable, and enterprise-grade.
`;

/* =========================================
   STREAMING GROQ AI SERVICE
========================================= */

export const askGroqAI =
  async (
    prompt,
    onChunk
  ) => {

    try {

      const stream =
        await groq.chat.completions.create({

          model:
            "llama-3.3-70b-versatile",

          messages: [

            {
              role: "system",

              content:
                SYSTEM_PROMPT,
            },

            {
              role: "user",

              content:
                prompt,
            },
          ],

          temperature: 0.7,

          max_tokens: 4000,

          stream: true,
        });

      let finalResponse = "";

      for await (
        const chunk of stream
      ) {

        const content =
          chunk.choices?.[0]?.delta?.content || "";

        if (content) {

          finalResponse += content;

          if (onChunk) {

            onChunk(content);
          }
        }
      }

      return finalResponse;

    } catch (error) {

      console.log(
        "GROQ ERROR:",
        error.message
      );

      throw error;
    }
  };