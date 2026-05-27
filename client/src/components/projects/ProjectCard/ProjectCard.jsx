// client/src/components/projects/ProjectCard/ProjectCard.jsx

import {
  FiTrash2,
  FiUsers,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";

function ProjectCard({

  project,
  onDelete,

}) {

  // STATUS COLORS

  const statusColors = {

    planning:
      "bg-blue-500/10 text-blue-500",

    active:
      "bg-green-500/10 text-green-500",

    completed:
      "bg-[#b9ff66]/20 text-[#7ed321]",

    "on-hold":
      "bg-yellow-500/10 text-yellow-500",
  };

  // PRIORITY COLORS

  const priorityColors = {

    low:
      "bg-gray-500/10 text-gray-500",

    medium:
      "bg-blue-500/10 text-blue-500",

    high:
      "bg-orange-500/10 text-orange-500",

    critical:
      "bg-red-500/10 text-red-500",
  };

  return (

    <div
      className="
        glass-card
        p-7
        rounded-3xl
        hover:scale-[1.02]
        transition
        relative
        overflow-hidden
      "
    >

      {/* TOP */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-bold
              text-black
              dark:text-white
            "
          >
            {project.name}
          </h2>

          <p
            className="
              mt-3
              text-gray-600
              dark:text-gray-400
              line-clamp-3
            "
          >
            {project.description}
          </p>

        </div>

        {/* DELETE */}

        <button

          onClick={() =>

            onDelete(
              project._id
            )
          }

          className="
            w-11
            h-11
            rounded-2xl
            bg-red-500/10
            text-red-500
            flex
            items-center
            justify-center
            hover:scale-110
            transition
          "
        >
          <FiTrash2 />
        </button>

      </div>

      {/* BADGES */}

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-6
        "
      >

        {/* STATUS */}

        <div
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-semibold
            capitalize
            ${statusColors[
              project.status
            ]}
          `}
        >
          {project.status}
        </div>

        {/* PRIORITY */}

        <div
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-semibold
            capitalize
            ${priorityColors[
              project.priority
            ]}
          `}
        >
          {project.priority}
        </div>

      </div>

      {/* TAGS */}

      <div
        className="
          flex
          flex-wrap
          gap-2
          mt-6
        "
      >

        {

          project.tags?.map(

            (tag, index) => (

              <span

                key={index}

                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-[#b9ff66]/20
                  text-[#7ed321]
                  border
                  border-[#b9ff66]/20
                "
              >
                #{tag}
              </span>
            ))
        }

      </div>

      {/* PROGRESS */}

      <div className="mt-8">

        <div
          className="
            flex
            items-center
            justify-between
            mb-2
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-600
              dark:text-gray-400
            "
          >

            <FiActivity />

            Progress

          </div>

          <span
            className="
              text-sm
              font-semibold
              text-black
              dark:text-white
            "
          >
            {project.progress}%
          </span>

        </div>

        {/* BAR */}

        <div
          className="
            w-full
            h-3
            rounded-full
            bg-black/10
            dark:bg-white/10
            overflow-hidden
          "
        >

          <div

            style={{
              width:
                `${project.progress}%`,
            }}

            className="
              h-full
              bg-[#b9ff66]
              rounded-full
            "
          />

        </div>

      </div>

      {/* FOOTER */}

      <div
        className="
          flex
          items-center
          justify-between
          mt-8
          pt-5
          border-t
          border-black/10
          dark:border-white/10
        "
      >

        {/* MEMBERS */}

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-600
            dark:text-gray-400
          "
        >

          <FiUsers />

          {

            project.members?.length
            || 0
          } Members

        </div>

        {/* DEADLINE */}

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-600
            dark:text-gray-400
          "
        >

          <FiCalendar />

          {

            project.deadline

              ? new Date(

                  project.deadline
                ).toLocaleDateString()

              : "No Deadline"
          }

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;