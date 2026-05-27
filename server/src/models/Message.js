// server/src/models/Message.js

import mongoose from "mongoose";

const messageSchema =
  new mongoose.Schema(

    {

      sender: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      receiver: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      message: {

        type: String,

        required: true,

        trim: true,
      },

      read: {

        type: Boolean,

        default: false,
      },

      edited: {

        type: Boolean,

        default: false,
      },

      attachments: [

        {
          type: String,
        },
      ],

      reactions: [

        {

          user: {

            type:
              mongoose.Schema.Types.ObjectId,

            ref: "User",
          },

          emoji: String,
        },
      ],
    },

    {

      timestamps: true,
    }
  );

const Message =
  mongoose.model(
    "Message",
    messageSchema
  );

export default Message;