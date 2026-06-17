// client/src/components/tasks/Tasks.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import TaskForm
from "./TaskForm/TaskForm";

import TaskList
from "./TaskList/TaskList";

import KanbanBoard
from "./KanbanBoard/KanbanBoard";

import TaskFilters
from "./TaskFilters/TaskFilters";

function Tasks() {

  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [filters, setFilters] =
    useState({
      status: "all",
      priority: "all",
      search: "",
    });

  // FETCH TASKS

  const fetchTasks = async () => {

    try {

      setLoading(true);

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          `\${import.meta.env.VITE_API_URL}/api/tasks`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setTasks(response.data.tasks);

    } catch (error) {

      console.error(error);

      setError(
        "Failed to fetch tasks"
      );

    } finally {

      setLoading(false);
    }
  };

  // LOAD TASKS

  useEffect(() => {

    fetchTasks();

  }, []);

  // CREATE TASK

  const handleTaskCreated =
    (newTask) => {

      setTasks((prev) => [

        newTask,
        ...prev,

      ]);
    };

  // DELETE TASK

  const handleDeleteTask =
    async (taskId) => {

      try {

        const token =
          localStorage.getItem("token");

        await axios.delete(

          `${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        setTasks((prev) =>

          prev.filter(

            (task) =>
              task._id !== taskId
          )
        );

      } catch (error) {

        console.error(error);
      }
    };

  // FILTER TASKS

  const filteredTasks =
    (tasks || []).filter((task) => {

      const matchesStatus =

        filters.status === "all"
        ||
        task.status === filters.status;

      const matchesPriority =

        filters.priority === "all"
        ||
        task.priority ===
        filters.priority;

      const matchesSearch =

        task.title
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          );

      return (

        matchesStatus &&
        matchesPriority &&
        matchesSearch
      );
    });

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
          Task Management 🚀
        </h1>

        <p
          className="
            mt-3
            text-gray-600
            dark:text-gray-400
            text-lg
          "
        >
          Manage tasks, workflows,
          productivity and team execution.
        </p>

      </div>

      {/* TASK FORM */}

      <TaskForm
        onTaskCreated={
          handleTaskCreated
        }
      />

      {/* FILTERS */}

      <div className="mt-8">

        <TaskFilters
          filters={filters}
          setFilters={setFilters}
        />

      </div>

      {/* LOADING */}

      {

        loading && (

          <div
            className="
              text-center
              py-20
              text-xl
              font-semibold
              text-gray-500
            "
          >
            Loading tasks...
          </div>
        )
      }

      {/* ERROR */}

      {

        error && (

          <div
            className="
              bg-red-500/10
              border
              border-red-500/20
              text-red-500
              p-4
              rounded-2xl
              mt-6
            "
          >
            {error}
          </div>
        )
      }

      {/* TASK LIST */}

      {

        !loading && (

          <div className="mt-10">

            <TaskList
              tasks={filteredTasks}
              onDeleteTask={
                handleDeleteTask
              }
            />

          </div>
        )
      }

      {/* KANBAN */}

      {

        !loading && (

          <div className="mt-10">

            <KanbanBoard
              tasks={filteredTasks}
              setTasks={setTasks}
            />

          </div>
        )
      }

    </DashboardLayout>
  );
}

export default Tasks;