// client/src/components/tasks/TaskForm/TaskForm.jsx

import {
  useState,
} from "react";

import axios from "axios";

import {
  FiPlus,
} from "react-icons/fi";

function TaskForm({

  onTaskCreated,

}) {

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [priority,
    setPriority] =
    useState("medium");

  const [status,
    setStatus] =
    useState("todo");

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState("");

  // CREATE TASK

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        setError("");

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.post(

            "http://localhost:5000/api/tasks",

            {
              title,
              description,
              priority,
              status,
            },

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        // UPDATE UI

        onTaskCreated(
          response.data.task
        );

        // RESET FORM

        setTitle("");
        setDescription("");
        setPriority("medium");
        setStatus("todo");

      } catch (error) {

        console.error(error);

        setError(

          error.response?.data?.message
          ||
          "Failed to create task"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
        glass-card
        p-8
        rounded-3xl
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          mb-6
        "
      >

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-[#b9ff66]
            flex
            items-center
            justify-center
            text-black
            text-2xl
          "
        >
          <FiPlus />
        </div>

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-black
              dark:text-white
            "
          >
            Create New Task
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
            "
          >
            Add tasks and manage workflow.
          </p>

        </div>

      </div>

      {/* ERROR */}

      {

        error && (

          <div
            className="
              mb-6
              bg-red-500/10
              border
              border-red-500/20
              text-red-500
              p-4
              rounded-2xl
            "
          >
            {error}
          </div>
        )
      }

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {/* TITLE */}

        <div className="md:col-span-2">

          <label
            className="
              block
              mb-2
              font-semibold
              text-black
              dark:text-white
            "
          >
            Task Title
          </label>

          <input
            type="text"
            value={title}

            onChange={(e) =>
              setTitle(e.target.value)
            }

            required

            placeholder="Enter task title"

            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              placeholder:text-gray-500
            "
          />

        </div>

        {/* DESCRIPTION */}

        <div className="md:col-span-2">

          <label
            className="
              block
              mb-2
              font-semibold
              text-black
              dark:text-white
            "
          >
            Description
          </label>

          <textarea
            rows="5"

            value={description}

            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }

            placeholder="Enter task description"

            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              placeholder:text-gray-500
              resize-none
            "
          />

        </div>

        {/* PRIORITY */}

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-black
              dark:text-white
            "
          >
            Priority
          </label>

          <select
            value={priority}

            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }

            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
            "
          >

            <option value="low">
              Low
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="high">
              High
            </option>

          </select>

        </div>

        {/* STATUS */}

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-black
              dark:text-white
            "
          >
            Status
          </label>

          <select
            value={status}

            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }

            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
            "
          >

            <option value="todo">
              To Do
            </option>

            <option value="in-progress">
              In Progress
            </option>

            <option value="completed">
              Completed
            </option>

          </select>

        </div>

        {/* BUTTON */}

        <div className="md:col-span-2">

          <button
            type="submit"

            disabled={loading}

            className="
              w-full
              py-4
              rounded-2xl
              bg-[#b9ff66]
              text-black
              font-bold
              text-lg
              hover:scale-[1.02]
              transition
              disabled:opacity-50
            "
          >

            {

              loading

                ? "Creating Task..."

                : "Create Task"
            }

          </button>

        </div>

      </form>

    </div>
  );
}

export default TaskForm;