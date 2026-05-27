import express from "express";

import {
  getUsers,
  getUserProfile,
} from "../controllers/userController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router =
  express.Router();


// ALL USERS

router.get(
  "/",
  authMiddleware,
  getUsers
);


// USER PROFILE

router.get(
  "/:id",
  authMiddleware,
  getUserProfile
);

export default router;