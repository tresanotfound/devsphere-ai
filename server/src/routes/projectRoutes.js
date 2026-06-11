// server/src/routes/projectRoutes.js

import express from "express";

import {

  createProject,
  getProjects,
  updateProject,
  deleteProject,
  addMember,
  updateProjectProgress,

} from "../controllers/projectController.js";

import protect
from "../middleware/authMiddleware.js";

const router = express.Router();



/* =========================================
   CREATE PROJECT
========================================= */

router.post(

  "/",

  protect,

  createProject
);



/* =========================================
   GET PROJECTS
========================================= */

router.get(

  "/",

  protect,

  getProjects
);



/* =========================================
   UPDATE PROJECT
========================================= */

router.put(

  "/:id",

  protect,

  updateProject
);



/* =========================================
   UPDATE PROJECT PROGRESS
========================================= */

router.put(

  "/:id/progress",

  protect,

  updateProjectProgress
);



/* =========================================
   DELETE PROJECT
========================================= */

router.delete(

  "/:id",

  protect,

  deleteProject
);



/* =========================================
   ADD MEMBER
========================================= */

router.post(

  "/:id/members",

  protect,

  addMember
);

export default router;