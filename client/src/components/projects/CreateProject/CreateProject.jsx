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

  const [name,
    setName] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [status,
    setStatus] =
    useState("planning");

  const [priority,
    setPriority] =
    useState("medium");

  const [deadline,
    setDeadline] =
    useState("");

  const [tags,
    setTags] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  // CREATE PROJECT

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
              deadline,

              tags:
                tags.split(",")

                  .map((tag) =>

                    tag.trim()
                  ),

            },

            {

              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        onProjectCreated(

          response.data.project
        );

        // RESET FORM

        setName("");
        setDescription("");
        setStatus("planning");
        setPriority("medium");
        setDeadline("");
        setTags("");

      } catch (error) {

        console.error(error);

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

      {/* HEADER */}

      <div className="mb-8">

        <h2
          className="
            text-3xl
            font-bold
            text-black
            dark:text-white
          "
        >
          Create Project 🚀
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Build collaborative
          AI-powered workspaces.
        </p>

      </div>

      {/* FORM */}

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

        {/* PROJECT NAME */}

        <input

          type="text"

          placeholder="Project Name"

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

        {/* DEADLINE */}

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

        {/* STATUS */}

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

        {/* PRIORITY */}

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

        {/* TAGS */}

        <input

          type="text"

          placeholder="Tags (comma separated)"

          value={tags}

          onChange={(e) =>

            setTags(
              e.target.value
            )
          }

          className="
            glass-input
            md:col-span-2
          "
        />

        {/* DESCRIPTION */}

        <textarea

          rows="5"

          placeholder="Project Description..."

          value={description}

          onChange={(e) =>

            setDescription(
              e.target.value
            )
          }

          className="
            glass-input
            md:col-span-2
            resize-none
          "
        />

        {/* BUTTON */}

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