// client/src/components/projects/Projects.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import CreateProject
from "./CreateProject/CreateProject";

import ProjectCard
from "./ProjectCard/ProjectCard";

import ProjectOverview
from "./ProjectOverview/ProjectOverview";

function Projects() {

  const [projects,
    setProjects] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState("");

  // FETCH PROJECTS

  const fetchProjects =
    async () => {

      try {

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            `\${import.meta.env.VITE_API_URL}/api/projects`,

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setProjects(
          response.data.projects
        );

      } catch (error) {

        console.error(error);

        setError(
          "Failed to fetch projects"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchProjects();

  }, []);

  // CREATE PROJECT

  const handleProjectCreated =
    (newProject) => {

      setProjects((prev) => [

        newProject,
        ...prev,

      ]);
    };

  // DELETE PROJECT

  const handleDeleteProject =
    async (projectId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `\${import.meta.env.VITE_API_URL}/api/projects/${projectId}`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        setProjects((prev) =>

          prev.filter(

            (project) =>

              project._id
              !== projectId
          )
        );

      } catch (error) {

        console.error(error);
      }
    };

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Projects Workspace 📁
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-gray-600
            dark:text-gray-400
          "
        >
          Manage collaborative
          AI-powered projects
          and productivity workflows.
        </p>

      </div>

      {/* OVERVIEW */}

      <ProjectOverview

        projects={projects}

      />

      {/* CREATE PROJECT */}

      <div className="mt-10">

        <CreateProject

          onProjectCreated={
            handleProjectCreated
          }

        />

      </div>

      {/* LOADING */}

      {

        loading && (

          <div
            className="
              text-center
              py-16
              text-xl
              text-gray-500
            "
          >
            Loading projects...
          </div>
        )
      }

      {/* ERROR */}

      {

        error && (

          <div
            className="
              mt-6
              p-4
              rounded-2xl
              bg-red-500/10
              border
              border-red-500/20
              text-red-500
            "
          >
            {error}
          </div>
        )
      }

      {/* PROJECT GRID */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mt-10
        "
      >

        {

          (projects || []).map(

            (project) => (

              <ProjectCard

                key={project._id}

                project={project}

                onDelete={
                  handleDeleteProject
                }

              />
            ))
        }

      </div>

    </DashboardLayout>
  );
}

export default Projects;