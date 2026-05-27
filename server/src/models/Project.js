// server/src/models/Project.js

import mongoose from "mongoose";

const projectSchema =
  new mongoose.Schema(

    {

      name: {

        type: String,

        required: true,

        trim: true,
      },

      description: {

        type: String,

        default: "",
      },

      owner: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      members: [

        {

          type:
            mongoose.Schema.Types.ObjectId,

          ref: "User",
        },
      ],

      status: {

        type: String,

        enum: [

          "planning",
          "active",
          "completed",
          "on-hold",

        ],

        default: "planning",
      },

      priority: {

        type: String,

        enum: [

          "low",
          "medium",
          "high",
          "critical",

        ],

        default: "medium",
      },

      deadline: {

        type: Date,
      },

      tags: [

        {
          type: String,
        },
      ],

      progress: {

        type: Number,

        default: 0,
      },

      files: [

        {
          name: String,
          url: String,
        },
      ],

      activityLogs: [

        {
          action: String,

          createdAt: {

            type: Date,

            default: Date.now,
          },
        },
      ],

      archived: {

        type: Boolean,

        default: false,
      },

    },

    {

      timestamps: true,
    }
  );

const Project =
  mongoose.model(

    "Project",
    projectSchema
  );

export default Project;