import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();



/*
========================================
AUTH ROUTES
========================================
*/

// REGISTER

router.post("/register", registerUser);

// LOGIN

router.post("/login", loginUser);

// CURRENT USER

router.get("/me", protect, getCurrentUser);



export default router;