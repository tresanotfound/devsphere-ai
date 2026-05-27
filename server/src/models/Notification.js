// server/src/models/Notification.js

import mongoose
from "mongoose";

const notificationSchema =
  new mongoose.Schema(

    {

      recipient: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      sender: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",
      },

      type: {

        type: String,

        enum: [

          "task",
          "project",
          "chat",
          "system",
        ],

        default: "system",
      },

      title: {

        type: String,

        required: true,
      },

      message: {

        type: String,

        required: true,
      },

      read: {

        type: Boolean,

        default: false,
      },

      link: {

        type: String,
      },
    },

    {

      timestamps: true,
    }
  );

const Notification =
  mongoose.model(

    "Notification",

    notificationSchema
  );

export default Notification;