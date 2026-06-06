import {
  askOpenRouterAI,
} from "./ai/openRouterService.js";

export const generateWorkflow =
  async (prompt) => {

    try {

      const enhancedPrompt = `
You are an expert Software Architect,
Product Manager and Senior Developer.

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

If applicable, provide:
- Sample Code
- Database Schemas
- API Examples
- Folder Structures

Be extremely detailed and practical.
`;

      const response =
        await askOpenRouterAI(
          enhancedPrompt
        );

      return response;

    } catch (error) {

      console.error(
        "TASK GENERATOR ERROR:",
        error
      );

      return `
# ❌ AI Generation Failed

Error:
${error.message}

Please verify:

- OpenRouter API Key
- Internet Connection
- OpenRouter Service Configuration
`;
    }
  };