import AIHistory
from "../models/AIHistory.js";

import {
  generateInsightsAI,
} from "../services/aiService.js";

import {
  summarizeNote,
} from "../services/noteSummarizerService.js";

import {
  generateCode,
} from "../services/codeGeneratorService.js";

import {
  generateAIResponse,
} from "../services/ai/aiGatewayService.js";

/* =========================================
   AI TASK / BLUEPRINT GENERATOR
========================================= */

export const generateAITasks =
  async (req, res) => {

    try {

      const {
        prompt,
      } = req.body;

      if (!prompt) {

        return res.status(400).json({

          success: false,

          message:
            "Prompt is required",
        });
      }

      /* =========================================
         ENHANCED AI PROMPT
      ========================================= */

      const enhancedPrompt = `
You are DevSphere AI.

Generate a COMPLETE project blueprint for:

"${prompt}"

Include:

# Project Overview

# Problem Statement

# Target Users

# Core Features

# Advanced Features

# Recommended Tech Stack

# Frontend Architecture

# Backend Architecture

# Database Design

# API Endpoints

# Folder Structure

# Development Roadmap

# Milestones

# Estimated Timeline

# Team Requirements

# Monetization Strategy

# Deployment Strategy

# Scalability Considerations

# Security Considerations

# Future Enhancements

If applicable provide:
- Sample Code
- Database Schemas
- API Examples
- Folder Structures

Respond in beautiful markdown.
`;

      /* =========================================
         STREAMING AI RESPONSE
      ========================================= */

      let finalResponse = "";

      await generateAIResponse(

        enhancedPrompt,

        async (chunk) => {

          finalResponse += chunk;

          res.write(chunk);
        }
      );

      /* =========================================
         SAVE AI HISTORY
      ========================================= */

      if (req.user?._id) {

        await AIHistory.create({

          user:
            req.user._id,

          prompt,

          response:
            finalResponse,

          projectType:
            "Blueprint Generator",

          tags: [

            "AI",
            "Blueprint",
            "Architecture",
          ],
        });
      }

      /* =========================================
         END RESPONSE
      ========================================= */

      res.end();

    } catch (error) {

      console.error(
        "AI TASK ERROR:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };

/* =========================================
   AI NOTE SUMMARY
========================================= */

export const summarizeNotes =
  async (req, res) => {

    try {

      const {
        notes,
      } = req.body;

      if (!notes) {

        return res.status(400).json({

          success: false,

          message:
            "Notes are required",
        });
      }

      const summary =
        summarizeNote(
          notes
        );

      return res.status(200).json({

        success: true,

        summary,
      });

    } catch (error) {

      console.error(
        "SUMMARY ERROR:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };

/* =========================================
   PRODUCTIVITY INSIGHTS
========================================= */

export const generateInsights =
  async (req, res) => {

    try {

      const {
        analyticsData,
      } = req.body;

      if (!analyticsData) {

        return res.status(400).json({

          success: false,

          message:
            "Analytics data required",
        });
      }

      const insights =
        await generateInsightsAI(
          analyticsData
        );

      return res.status(200).json({

        success: true,

        insights,
      });

    } catch (error) {

      console.error(
        "INSIGHTS ERROR:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };

/* =========================================
   AI CODE GENERATOR
========================================= */

export const generateCodeAI =
  async (req, res) => {

    try {

      const {
        prompt,
      } = req.body;

      if (!prompt) {

        return res.status(400).json({

          success: false,

          message:
            "Prompt required",
        });
      }

      /* =========================================
         LOCAL TEMPLATE GENERATOR
      ========================================= */

      let code =
        generateCode(
          prompt
        );

      /* =========================================
         FALLBACK TO REAL AI
      ========================================= */

      if (

        code.includes(
          "No matching template found"
        )

      ) {

        const aiPrompt = `
Generate production-ready code for:

${prompt}

Requirements:
- Modern coding standards
- Clean architecture
- Proper comments
- Scalable structure
- Best practices
`;

        code =
          await generateAIResponse(
            aiPrompt
          );
      }

      return res.status(200).json({

        success: true,

        code,
      });

    } catch (error) {

      console.error(
        "CODE GENERATOR ERROR:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };

  /* =========================================
   GET AI HISTORY
========================================= */

export const getAIHistory =
  async (req, res) => {

    try {

      const history =
        await AIHistory.find({

          user:
            req.user._id,
        })

        .sort({
          createdAt: -1,
        })

        .limit(20);

      return res.status(200).json({

        success: true,

        history,
      });

    } catch (error) {

      console.error(
        "GET AI HISTORY ERROR:",
        error
      );

      return res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };