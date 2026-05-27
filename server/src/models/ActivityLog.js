import mongoose from "mongoose";

const activityLogSchema =
  new mongoose.Schema(

    {

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

      action: {

        type: String,

        required: true,

      },

      module: {

        type: String,

        enum: [
          "auth",
          "tasks",
          "projects",
          "notes",
          "chat",
          "ai",
          "admin",
          "settings",
        ],

        required: true,

      },

      details: {

        type: String,

        default: "",

      },

      ipAddress: {

        type: String,

        default: "",

      },

    },

    {
      timestamps: true,
    }
  );

const ActivityLog =
  mongoose.model(
    "ActivityLog",
    activityLogSchema
  );

export default ActivityLog;