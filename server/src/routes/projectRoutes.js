// server/src/routes/projectRoutes.js

import express from "express";

import {

  createProject,
  getProjects,
  updateProject,
  deleteProject,
  addMember,

} from "../controllers/projectController.js";

import protect
from "../middleware/authMiddleware.js";

const router = express.Router();



/* =========================================
   CREATE PROJECT
   POST /api/projects
========================================= */

router.post(

  "/",

  protect,

  createProject
);



/* =========================================
   GET USER PROJECTS
   GET /api/projects
========================================= */

router.get(

  "/",

  protect,

  getProjects
);



/* =========================================
   UPDATE PROJECT
   PUT /api/projects/:id
========================================= */

router.put(

  "/:id",

  protect,

  updateProject
);



/* =========================================
   DELETE PROJECT
   DELETE /api/projects/:id
========================================= */

router.delete(

  "/:id",

  protect,

  deleteProject
);



/* =========================================
   ADD MEMBER
   POST /api/projects/:id/members
========================================= */

router.post(

  "/:id/members",

  protect,

  addMember
);

export default router;