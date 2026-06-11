import mongoose from "mongoose";

/* =========================================
   AI HISTORY SCHEMA
========================================= */

const aiHistorySchema =
  new mongoose.Schema({

    /* =========================================
       USER
    ========================================= */

    user: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },

    /* =========================================
       PROMPT
    ========================================= */

    prompt: {

      type: String,

      required: true,
    },

    /* =========================================
       RESPONSE
    ========================================= */

    response: {

      type: String,

      required: true,
    },

    /* =========================================
       PROJECT TYPE
    ========================================= */

    projectType: {

      type: String,

      default: "AI Blueprint",
    },

    /* =========================================
       TAGS
    ========================================= */

    tags: [

      {
        type: String,
      },
    ],

  },

  {
    timestamps: true,
  }
);

/* =========================================
   EXPORT MODEL
========================================= */

const AIHistory =
  mongoose.model(
    "AIHistory",
    aiHistorySchema
  );

export default AIHistory;