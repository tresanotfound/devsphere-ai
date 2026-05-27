import Project
from "../models/Project.js";


// ======================================
// FETCH PROJECTS
// ======================================

export const fetchProjects =
  async () => {

    return await Project.find()
      .populate(
        "members",
        "name email"
      );
  };


// ======================================
// CREATE PROJECT
// ======================================

export const addProject =
  async (projectData) => {

    return await Project.create(
      projectData
    );
  };