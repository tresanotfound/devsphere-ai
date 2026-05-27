// server/src/routes/taskRoutes.js

import express from "express";

import {

  createTask,
  getTasks,
  updateTask,
  deleteTask,

} from "../controllers/taskController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();



/* =========================================
   CREATE TASK
   POST /api/tasks
========================================= */

router.post(

  "/",

  protect,

  createTask
);



/* =========================================
   GET USER TASKS
   GET /api/tasks
========================================= */

router.get(

  "/",

  protect,

  getTasks
);



/* =========================================
   UPDATE TASK
   PUT /api/tasks/:id
========================================= */

router.put(

  "/:id",

  protect,

  updateTask
);



/* =========================================
   DELETE TASK
   DELETE /api/tasks/:id
========================================= */

router.delete(

  "/:id",

  protect,

  deleteTask
);

export default router;