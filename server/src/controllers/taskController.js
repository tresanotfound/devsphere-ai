// server/src/controllers/taskController.js

import Task from "../models/Task.js";



/* =========================================
   CREATE TASK
========================================= */

export const createTask = async (

  req,
  res

) => {

  try {

    const {

      title,
      description,
      priority,
      status,
      dueDate,
      tags,

    } = req.body;

    const task = await Task.create({

      title,
      description,
      priority,
      status,
      dueDate,
      tags,

      createdBy: req.user._id,

      assignedTo: req.user._id,

    });

    res.status(201).json({

      success: true,
      message: "✅ Task created successfully",
      task,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   GET USER TASKS
========================================= */

export const getTasks = async (

  req,
  res

) => {

  try {

    const tasks = await Task.find({

      createdBy: req.user._id,

    })

      .sort({

        createdAt: -1,

      });

    res.status(200).json({

      success: true,
      count: tasks.length,
      tasks,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   UPDATE TASK
========================================= */

export const updateTask = async (

  req,
  res

) => {

  try {

    const task = await Task.findById(

      req.params.id
    );

    if (!task) {

      return res.status(404).json({

        success: false,
        message: "Task not found",

      });

    }

    if (

      task.createdBy.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    const updatedTask = await Task.findByIdAndUpdate(

      req.params.id,

      req.body,

      {

        new: true,
        runValidators: true,

      }
    );

    res.status(200).json({

      success: true,
      message: "✅ Task updated",
      task: updatedTask,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};



/* =========================================
   DELETE TASK
========================================= */

export const deleteTask = async (

  req,
  res

) => {

  try {

    const task = await Task.findById(

      req.params.id
    );

    if (!task) {

      return res.status(404).json({

        success: false,
        message: "Task not found",

      });

    }

    if (

      task.createdBy.toString()

      !==

      req.user._id.toString()

    ) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    await task.deleteOne();

    res.status(200).json({

      success: true,
      message: "🗑️ Task deleted successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }
};