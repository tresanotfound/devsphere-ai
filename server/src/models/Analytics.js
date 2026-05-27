import mongoose from "mongoose";

const analyticsSchema =
  new mongoose.Schema(

    {

      totalUsers: {

        type: Number,

        default: 0,

      },

      activeProjects: {

        type: Number,

        default: 0,

      },

      completedTasks: {

        type: Number,

        default: 0,

      },

      aiRequests: {

        type: Number,

        default: 0,

      },

      productivityScore: {

        type: Number,

        default: 0,

      },

    },

    {
      timestamps: true,
    }
  );

const Analytics =
  mongoose.model(
    "Analytics",
    analyticsSchema
  );

export default Analytics;