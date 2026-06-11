// server/src/controllers/projectController.js

import Project from "../models/Project.js";

/* =========================================
   CREATE PROJECT
========================================= */

export const createProject = async (

  req,
  res

) => {

  try {

    const {

      name,
      description,
      status,
      priority,
      assignedDate,
      deadline,
      tags,

    } = req.body;

    const project =
      await Project.create({

        name,
        description,
        status,
        priority,
        assignedDate,
        deadline,
        tags,

        owner: req.user._id,

        members: [

          req.user._id,
        ],

        activityLogs: [

          {
            action:
              "Project created",
          },
        ],
      });

    res.status(201).json({

      success: true,

      message:
        "📁 Project created successfully",

      project,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });

  }
};



/* =========================================
   GET USER PROJECTS
========================================= */

export const getProjects = async (

  req,
  res

) => {

  try {

    const projects =
      await Project.find({

        members:
          req.user._id,

        archived: false,

      })

        .populate(

          "owner",

          "name email"
        )

        .populate(

          "members",

          "name email avatar"
        )

        .sort({

          updatedAt: -1,
        });

    res.status(200).json({

      success: true,

      count:
        projects.length,

      projects,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });

  }
};



/* =========================================
   UPDATE PROJECT
========================================= */

export const updateProject = async (

  req,
  res

) => {

  try {

    const project =
      await Project.findById(

        req.params.id
      );

    if (!project) {

      return res.status(404).json({

        success: false,

        message:
          "Project not found",

      });
    }

    /* =========================================
       OWNER CHECK
    ========================================= */

    if (

      project.owner.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized",
      });
    }

    const updatedProject =
      await Project.findByIdAndUpdate(

        req.params.id,

        {

          ...req.body,

          $push: {

            activityLogs: {

              action:
                "Project updated",
            },
          },
        },

        {

          new: true,

          runValidators: true,
        }
      );

    res.status(200).json({

      success: true,

      message:
        "✏️ Project updated successfully",

      project:
        updatedProject,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });

  }
};



/* =========================================
   UPDATE PROJECT PROGRESS
========================================= */

export const updateProjectProgress = async (

  req,
  res

) => {

  try {

    const {

      progress,

    } = req.body;

    const project =
      await Project.findById(

        req.params.id
      );

    if (!project) {

      return res.status(404).json({

        success: false,

        message:
          "Project not found",
      });
    }

    /* =========================================
       OWNER CHECK
    ========================================= */

    if (

      project.owner.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized",
      });
    }

    /* =========================================
       UPDATE PROGRESS
    ========================================= */

    project.progress =
      progress;

    project.activityLogs.push({

      action:
        `Progress updated to ${progress}%`,
    });

    await project.save();

    res.status(200).json({

      success: true,

      message:
        "📈 Progress updated",

      project,
    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });
  }
};



/* =========================================
   DELETE PROJECT
========================================= */

export const deleteProject = async (

  req,
  res

) => {

  try {

    const project =
      await Project.findById(

        req.params.id
      );

    if (!project) {

      return res.status(404).json({

        success: false,

        message:
          "Project not found",
      });
    }

    /* =========================================
       OWNER CHECK
    ========================================= */

    if (

      project.owner.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized",
      });
    }

    await project.deleteOne();

    res.status(200).json({

      success: true,

      message:
        "🗑️ Project deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });

  }
};



/* =========================================
   ADD MEMBER
========================================= */

export const addMember = async (

  req,
  res

) => {

  try {

    const {

      memberId,

    } = req.body;

    const project =
      await Project.findById(

        req.params.id
      );

    if (!project) {

      return res.status(404).json({

        success: false,

        message:
          "Project not found",
      });
    }

    /* =========================================
       OWNER CHECK
    ========================================= */

    if (

      project.owner.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,

        message:
          "Unauthorized",
      });
    }

    /* =========================================
       PREVENT DUPLICATES
    ========================================= */

    if (

      project.members.includes(
        memberId
      )
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Member already exists",
      });
    }

    project.members.push(
      memberId
    );

    project.activityLogs.push({

      action:
        "New member added",
    });

    await project.save();

    res.status(200).json({

      success: true,

      message:
        "👥 Member added successfully",

      project,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        error.message,
    });

  }
};