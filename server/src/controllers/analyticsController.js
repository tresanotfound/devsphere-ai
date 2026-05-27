// server/src/controllers/analyticsController.js

import Task from "../models/Task.js";

import Project from "../models/Project.js";

import Note from "../models/Note.js";



/* =========================================
   GET DASHBOARD ANALYTICS
========================================= */

export const getDashboardAnalytics =
  async (req, res) => {

    try {

      // TASKS

      const totalTasks =
        await Task.countDocuments({

          createdBy:
            req.user._id,
        });

      const completedTasks =
        await Task.countDocuments({

          createdBy:
            req.user._id,

          status:
            "completed",
        });

      const pendingTasks =
        await Task.countDocuments({

          createdBy:
            req.user._id,

          status: {

            $ne:
              "completed",
          },
        });

      // PROJECTS

      const totalProjects =
        await Project.countDocuments({

          members:
            req.user._id,
        });

      const completedProjects =
        await Project.countDocuments({

          members:
            req.user._id,

          status:
            "completed",
        });

      // NOTES

      const totalNotes =
        await Note.countDocuments({

          createdBy:
            req.user._id,
        });

      // PRODUCTIVITY SCORE

      const productivityScore =
        totalTasks > 0

          ? Math.round(

              (
                completedTasks
                / totalTasks
              ) * 100
            )

          : 0;

      // RESPONSE

      res.status(200).json({

        success: true,

        analytics: {

          tasks: {

            total:
              totalTasks,

            completed:
              completedTasks,

            pending:
              pendingTasks,
          },

          projects: {

            total:
              totalProjects,

            completed:
              completedProjects,
          },

          notes: {

            total:
              totalNotes,
          },

          productivityScore,
        },
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };