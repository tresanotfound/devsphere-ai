import express from "express";

import {
  getAdminDashboard,
  getSystemLogs,
} from "../controllers/adminController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

import adminMiddleware
from "../middleware/adminMiddleware.js";

const router =
  express.Router();


// ADMIN DASHBOARD

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getAdminDashboard
);


// SYSTEM LOGS

router.get(
  "/logs",
  authMiddleware,
  adminMiddleware,
  getSystemLogs
);

export default router;