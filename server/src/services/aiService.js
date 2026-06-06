// server/src/services/aiService.js

import {
  GoogleGenerativeAI,
} from "@google/generative-ai";



/* =========================================
   GEMINI CONFIG
========================================= */

const genAI =
  new GoogleGenerativeAI(

    process.env.GEMINI_API_KEY
  );



const model =
  genAI.getGenerativeModel({

    model: "gemini-1.5-flash-latest",
  });



/* =========================================
   AI TASK GENERATOR
========================================= */

export const generateTasksAI =
  async (prompt) => {

    try {

      const aiPrompt = `

You are an expert AI project manager.

The user will give you a project idea.

Generate:

1. Project Overview
2. Recommended Tech Stack
3. Task Breakdown
4. Priorities
5. Estimated Timeline
6. Suggested Workflow

Format response beautifully in markdown.

Project Idea:
${prompt}

`;



      const result =
        await model.generateContent(
          aiPrompt
        );



      const response =
        await result.response;



      return response.text();

    } catch (error) {

  console.log(
    "❌ FULL GEMINI ERROR:"
  );

  console.log(error);

  throw error;
}
  };



/* =========================================
   AI NOTE SUMMARIZER
========================================= */

export const summarizeNotesAI =
  async (notes) => {

    try {

      const aiPrompt = `

Summarize the following notes.

Also provide:

- Key points
- Action items
- Important deadlines
- Short productivity summary

Notes:
${notes}

`;



      const result =
        await model.generateContent(
          aiPrompt
        );



      const response =
        await result.response;



      return response.text();

    } catch (error) {

      console.log(
        "❌ AI Summary Error:",
        error.message
      );

      throw new Error(
        "AI summary failed"
      );
    }
  };



/* =========================================
   AI PRODUCTIVITY INSIGHTS
========================================= */

export const generateInsightsAI =
  async (data) => {

    try {

      const aiPrompt = `

Analyze this productivity data.

Provide:

- Productivity score
- Bottlenecks
- Suggestions
- Team insights
- Improvements

Data:
${JSON.stringify(data)}

`;



      const result =
        await model.generateContent(
          aiPrompt
        );



      const response =
        await result.response;



      return response.text();

    } catch (error) {

      console.log(
        "❌ AI Insights Error:",
        error.message
      );

      throw new Error(
        "AI insights failed"
      );
    }
  };