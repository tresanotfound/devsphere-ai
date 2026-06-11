// client/src/components/projects/CreateProject/CreateProject.jsx

import {
  useState,
} from "react";

import axios from "axios";

import {
  FiPlus,
} from "react-icons/fi";

function CreateProject({

  onProjectCreated,

}) {

  /* =========================================
     FORM STATES
  ========================================= */

  const [
    name,
    setName,
  ] = useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("planning");

  const [
    priority,
    setPriority,
  ] = useState("medium");

  /* =========================================
     ASSIGNED DATE
  ========================================= */

  const [
    assignedDate,
    setAssignedDate,
  ] = useState("");

  /* =========================================
     DEADLINE
  ========================================= */

  const [
    deadline,
    setDeadline,
  ] = useState("");

  /* =========================================
     TAGS
  ========================================= */

  const [
    tags,
    setTags,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  /* =========================================
     PROJECT DURATION
  ========================================= */

  const durationInDays =

    assignedDate &&
    deadline

      ? Math.ceil(

          (
            new Date(deadline)

            -

            new Date(assignedDate)
          )

          /

          (
            1000 *
            60 *
            60 *
            24
          )
        )

      : null;

  /* =========================================
     CREATE PROJECT
  ========================================= */

  const handleCreateProject =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.post(

            "http://localhost:5000/api/projects",

            {

              name,
              description,
              status,
              priority,
              assignedDate,
              deadline,

              tags:
                tags
                  .split(",")

                  .map((tag) =>

                    tag.trim()
                  )

                  .filter(Boolean),

            },

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        /* =========================================
           UPDATE UI
        ========================================= */

        onProjectCreated(

          response.data.project
        );

        /* =========================================
           RESET FORM
        ========================================= */

        setName("");

        setDescription("");

        setStatus(
          "planning"
        );

        setPriority(
          "medium"
        );

        setAssignedDate("");

        setDeadline("");

        setTags("");

      } catch (error) {

        console.error(
          error
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

      {/* =========================================
         HEADER
      ========================================= */}

      <div className="mb-8">

        <h2
          className="
            text-4xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Create Project 🚀
        </h2>

        <p
          className="
            mt-3
            text-gray-600
            dark:text-gray-400
            text-lg
          "
        >
          Build collaborative
          AI-powered workspaces.
        </p>

      </div>

      {/* =========================================
         FORM
      ========================================= */}

      <form

        onSubmit={
          handleCreateProject
        }

        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {/* =========================================
           PROJECT NAME
        ========================================= */}

        <div className="space-y-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Project Name
          </label>

          <input

            type="text"

            placeholder="Enter project name"

            value={name}

            onChange={(e) =>

              setName(
                e.target.value
              )
            }

            required

            className="
              glass-input
            "
          />

        </div>

        {/* =========================================
           ASSIGNED DATE
        ========================================= */}

        <div className="space-y-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Assigned Date
          </label>

          <input

            type="date"

            value={assignedDate}

            onChange={(e) =>

              setAssignedDate(
                e.target.value
              )
            }

            className="
              glass-input
            "
          />

        </div>

        {/* =========================================
           STATUS
        ========================================= */}

        <div className="space-y-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Project Status
          </label>

          <select

            value={status}

            onChange={(e) =>

              setStatus(
                e.target.value
              )
            }

            className="
              glass-input
            "
          >

            <option value="planning">
              Planning
            </option>

            <option value="active">
              Active
            </option>

            <option value="completed">
              Completed
            </option>

            <option value="on-hold">
              On Hold
            </option>

          </select>

        </div>

        {/* =========================================
           PRIORITY
        ========================================= */}

        <div className="space-y-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Priority Level
          </label>

          <select

            value={priority}

            onChange={(e) =>

              setPriority(
                e.target.value
              )
            }

            className="
              glass-input
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

            <option value="critical">
              Critical
            </option>

          </select>

        </div>

        {/* =========================================
           DEADLINE
        ========================================= */}

        <div className="space-y-2 md:col-span-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Project Deadline
          </label>

          <input

            type="date"

            value={deadline}

            onChange={(e) =>

              setDeadline(
                e.target.value
              )
            }

            className="
              glass-input
            "
          />

        </div>

        {/* =========================================
           TAGS
        ========================================= */}

        <div className="space-y-2 md:col-span-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Project Tags
          </label>

          <input

            type="text"

            placeholder="AI, SaaS, MERN, Dashboard"

            value={tags}

            onChange={(e) =>

              setTags(
                e.target.value
              )
            }

            className="
              glass-input
            "
          />

        </div>

        {/* =========================================
           DESCRIPTION
        ========================================= */}

        <div className="space-y-2 md:col-span-2">

          <label
            className="
              text-sm
              font-semibold
              text-gray-300
            "
          >
            Project Description
          </label>

          <textarea

            rows="5"

            placeholder="Describe your project..."

            value={description}

            onChange={(e) =>

              setDescription(
                e.target.value
              )
            }

            className="
              glass-input
              resize-none
            "
          />

        </div>

        {/* =========================================
           DURATION DISPLAY
        ========================================= */}

        {

          assignedDate &&
          deadline &&
          durationInDays >= 0 && (

            <div
              className="
                md:col-span-2
                p-6
                rounded-3xl
                bg-[#b9ff66]/10
                border
                border-[#b9ff66]/20
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                  text-[#b9ff66]
                "
              >
                ⏳ Project Timeline
              </h3>

              <div
                className="
                  mt-4
                  space-y-2
                  text-gray-300
                "
              >

                <p>
                  <span
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    Assigned:
                  </span>

                  {" "}

                  {

                    new Date(
                      assignedDate
                    ).toLocaleDateString()
                  }
                </p>

                <p>
                  <span
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    Deadline:
                  </span>

                  {" "}

                  {

                    new Date(
                      deadline
                    ).toLocaleDateString()
                  }
                </p>

                <p
                  className="
                    text-[#b9ff66]
                    font-bold
                    text-lg
                    mt-3
                  "
                >
                  Duration:
                  {" "}
                  {durationInDays}
                  {" "}
                  Days
                </p>

              </div>

            </div>
          )
        }

        {/* =========================================
           BUTTON
        ========================================= */}

        <button

          type="submit"

          disabled={loading}

          className="
            md:col-span-2
            flex
            items-center
            justify-center
            gap-3
            bg-[#b9ff66]
            hover:scale-[1.02]
            transition
            text-black
            py-4
            rounded-2xl
            font-bold
            text-lg
            disabled:opacity-70
          "
        >

          <FiPlus />

          {

            loading

              ? "Creating Project..."

              : "Create Project"
          }

        </button>

      </form>

    </div>
  );
}

export default CreateProject;