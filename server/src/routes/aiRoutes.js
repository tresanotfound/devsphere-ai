import express from "express";

import {
  generateAITasks,
  summarizeNotes,
  generateInsights,
  generateCodeAI,
} from "../controllers/aiController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================================
   AI TASK GENERATOR
========================================= */

router.post(
  "/generate-tasks",
  authMiddleware,
  generateAITasks
);

/* =========================================
   AI NOTE SUMMARY
========================================= */

router.post(
  "/summarize-notes",
  authMiddleware,
  summarizeNotes
);

/* =========================================
   AI PRODUCTIVITY INSIGHTS
========================================= */

router.post(
  "/generate-insights",
  authMiddleware,
  generateInsights
);

/* =========================================
   AI CODE GENERATOR
========================================= */

router.post(
  "/generate-code",
  authMiddleware,
  generateCodeAI
);

export default router;