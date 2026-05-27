// server/src/routes/notificationRoutes.js

import express
from "express";

import {

  getNotifications,

  markAsRead,

  deleteNotification,

  getUnreadCount,

} from "../controllers/notificationController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router =
  express.Router();



/* =========================================
   GET ALL NOTIFICATIONS
========================================= */

router.get(

  "/",

  authMiddleware,

  getNotifications
);



/* =========================================
   UNREAD COUNT
========================================= */

router.get(

  "/unread-count",

  authMiddleware,

  getUnreadCount
);



/* =========================================
   MARK AS READ
========================================= */

router.put(

  "/read/:notificationId",

  authMiddleware,

  markAsRead
);



/* =========================================
   DELETE NOTIFICATION
========================================= */

router.delete(

  "/:notificationId",

  authMiddleware,

  deleteNotification
);



export default router;