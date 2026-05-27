// server/src/routes/notesRoutes.js

import express from "express";

import {

  createNote,
  getNotes,
  updateNote,
  deleteNote,
  togglePinNote,

} from "../controllers/notesController.js";

import protect
from "../middleware/authMiddleware.js";

const router = express.Router();



/* =========================================
   CREATE NOTE
   POST /api/notes
========================================= */

router.post(

  "/",

  protect,

  createNote
);



/* =========================================
   GET USER NOTES
   GET /api/notes
========================================= */

router.get(

  "/",

  protect,

  getNotes
);



/* =========================================
   UPDATE NOTE
   PUT /api/notes/:id
========================================= */

router.put(

  "/:id",

  protect,

  updateNote
);



/* =========================================
   DELETE NOTE
   DELETE /api/notes/:id
========================================= */

router.delete(

  "/:id",

  protect,

  deleteNote
);



/* =========================================
   PIN / UNPIN NOTE
   PATCH /api/notes/:id/pin
========================================= */

router.patch(

  "/:id/pin",

  protect,

  togglePinNote
);

export default router;