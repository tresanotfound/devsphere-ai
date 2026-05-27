// server/src/models/Note.js

import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(

  {

    title: {

      type: String,

      required: true,

      trim: true,

    },

    content: {

      type: String,

      required: true,

    },

    tags: [

      {

        type: String,

        trim: true,

      },

    ],

    pinned: {

      type: Boolean,

      default: false,

    },

    archived: {

      type: Boolean,

      default: false,

    },

    createdBy: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,

    },

    lastEditedAt: {

      type: Date,

      default: Date.now,

    },

  },

  {

    timestamps: true,

  }
);

const Note = mongoose.model(
  "Note",
  noteSchema
);

export default Note;