import Task from "../models/Task.js";


// ======================================
// FETCH TASKS
// ======================================

export const fetchTasks =
  async () => {

    return await Task.find()
      .populate(
        "createdBy",
        "name email"
      );
  };


// ======================================
// CREATE TASK
// ======================================

export const addTask =
  async (taskData) => {

    return await Task.create(
      taskData
    );
  };