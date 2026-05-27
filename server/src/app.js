import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import cookieParser from "cookie-parser";


// CONFIG

import limiter
from "./middleware/rateLimiter.js";


// ERROR MIDDLEWARE

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";


// ROUTES

import authRoutes
from "./routes/authRoutes.js";

import userRoutes
from "./routes/userRoutes.js";

import taskRoutes
from "./routes/taskRoutes.js";

import projectRoutes
from "./routes/projectRoutes.js";

import notesRoutes
from "./routes/notesRoutes.js";

import aiRoutes
from "./routes/aiRoutes.js";

import analyticsRoutes
from "./routes/analyticsRoutes.js";

import chatRoutes
from "./routes/chatRoutes.js";

import notificationRoutes
from "./routes/notificationRoutes.js";

import adminRoutes
from "./routes/adminRoutes.js";


const app = express();


// ======================================
// GLOBAL MIDDLEWARE
// ======================================

// JSON

app.use(express.json());


// URL ENCODED

app.use(
  express.urlencoded({
    extended: true,
  })
);


// COOKIE PARSER

app.use(cookieParser());


// SECURITY

app.use(helmet());


// CORS

app.use(

  cors({

    origin:
      "http://localhost:5173",

    credentials: true,

  })

);


// LOGGER

app.use(morgan("dev"));


// RATE LIMITER

app.use(limiter);


// STATIC FILES

app.use(
  "/uploads",
  express.static("src/uploads")
);


// ======================================
// API ROUTES
// ======================================

app.get(
  "/",
  (req, res) => {

    res.status(200).json({

      success: true,

      message:
        "🚀 DevSphere AI Backend Running",

    });
  }
);


// AUTH

app.use(
  "/api/auth",
  authRoutes
);


// USERS

app.use(
  "/api/users",
  userRoutes
);


// TASKS

app.use(
  "/api/tasks",
  taskRoutes
);


// PROJECTS

app.use(
  "/api/projects",
  projectRoutes
);


// NOTES

app.use(
  "/api/notes",
  notesRoutes
);


// AI

app.use(
  "/api/ai",
  aiRoutes
);


// ANALYTICS

app.use(
  "/api/analytics",
  analyticsRoutes
);


// CHAT

app.use(
  "/api/chat",
  chatRoutes
);


// NOTIFICATIONS

app.use(
  "/api/notifications",
  notificationRoutes
);


// ADMIN

app.use(
  "/api/admin",
  adminRoutes
);


// ======================================
// ERROR MIDDLEWARE
// ======================================

app.use(notFound);

app.use(errorHandler);


export default app;