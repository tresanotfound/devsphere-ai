// server/src/models/Project.js

import mongoose from "mongoose";

const projectSchema =

  new mongoose.Schema(

    {

      /* =========================================
         PROJECT NAME
      ========================================= */

      name: {

        type: String,

        required: true,

        trim: true,
      },

      /* =========================================
         DESCRIPTION
      ========================================= */

      description: {

        type: String,

        default: "",
      },

      /* =========================================
         PROJECT OWNER
      ========================================= */

      owner: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      /* =========================================
         TEAM MEMBERS
      ========================================= */

      members: [

        {

          type:
            mongoose.Schema.Types.ObjectId,

          ref: "User",
        },
      ],

      /* =========================================
         PROJECT STATUS
      ========================================= */

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

      /* =========================================
         PROJECT PRIORITY
      ========================================= */

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

      /* =========================================
         ASSIGNED DATE
      ========================================= */

      assignedDate: {

        type: Date,

        default: Date.now,
      },

      /* =========================================
         DEADLINE DATE
      ========================================= */

      deadline: {

        type: Date,
      },

      /* =========================================
         TAGS
      ========================================= */

      tags: [

        {

          type: String,
        },
      ],

      /* =========================================
         PROJECT PROGRESS
      ========================================= */

      progress: {

        type: Number,

        default: 0,

        min: 0,

        max: 100,
      },

      /* =========================================
         FILE ATTACHMENTS
      ========================================= */

      files: [

        {

          name: String,

          url: String,
        },
      ],

      /* =========================================
         ACTIVITY LOGS
      ========================================= */

      activityLogs: [

        {

          action: String,

          createdAt: {

            type: Date,

            default: Date.now,
          },
        },
      ],

      /* =========================================
         ARCHIVE STATUS
      ========================================= */

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