// server/src/routes/analyticsRoutes.js

import express from "express";

import {
  getDashboardAnalytics,
} from "../controllers/analyticsController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router =
  express.Router();



/* =========================================
   DASHBOARD ANALYTICS
========================================= */

router.get(

  "/dashboard",

  authMiddleware,

  getDashboardAnalytics
);



export default router;