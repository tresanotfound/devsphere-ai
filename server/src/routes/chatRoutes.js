// server/src/routes/chatRoutes.js

import express
from "express";

import {

  sendMessage,

  getMessages,

  getConversations,

  markAsRead,

} from "../controllers/chatController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router =
  express.Router();



/* =========================================
   SEND MESSAGE
========================================= */

router.post(

  "/send",

  authMiddleware,

  sendMessage
);



/* =========================================
   GET CHAT MESSAGES
========================================= */

router.get(

  "/messages/:userId",

  authMiddleware,

  getMessages
);



/* =========================================
   GET CONVERSATIONS
========================================= */

router.get(

  "/conversations",

  authMiddleware,

  getConversations
);



/* =========================================
   MARK AS READ
========================================= */

router.put(

  "/read/:messageId",

  authMiddleware,

  markAsRead
);



export default router;