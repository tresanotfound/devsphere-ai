// client/src/components/tasks/TaskList/TaskList.jsx

import {
  FiTrash2,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

function TaskList({

  tasks,
  onDeleteTask,

}) {

  // PRIORITY COLORS

  const priorityColors = {

    low:
      "bg-blue-500/10 text-blue-500",

    medium:
      "bg-yellow-500/10 text-yellow-500",

    high:
      "bg-red-500/10 text-red-500",
  };

  // STATUS COLORS

  const statusColors = {

    todo:
      "bg-gray-500/10 text-gray-500",

    "in-progress":
      "bg-orange-500/10 text-orange-500",

    completed:
      "bg-green-500/10 text-green-500",
  };

  return (

    <div>

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div>

          <h2
            className="
              text-4xl
              font-extrabold
              text-black
              dark:text-white
            "
          >
            Task List 📋
          </h2>

          <p
            className="
              mt-2
              text-gray-600
              dark:text-gray-400
            "
          >
            View and manage all tasks.
          </p>

        </div>

        <div
          className="
            px-5
            py-3
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-bold
          "
        >
          {tasks.length} Tasks
        </div>

      </div>

      {/* EMPTY */}

      {

        tasks.length === 0 && (

          <div
            className="
              glass-card
              p-16
              rounded-3xl
              text-center
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-black
                dark:text-white
              "
            >
              No Tasks Yet 🚀
            </h3>

            <p
              className="
                mt-3
                text-gray-600
                dark:text-gray-400
              "
            >
              Create your first task
              to begin productivity tracking.
            </p>

          </div>
        )
      }

      {/* TASK GRID */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {

          tasks.map((task) => (

            <div

              key={task._id}

              className="
                glass-card
                p-6
                rounded-3xl
                hover:scale-[1.02]
                transition
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

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-black
                      dark:text-white
                    "
                  >
                    {task.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-gray-600
                      dark:text-gray-400
                      line-clamp-3
                    "
                  >
                    {task.description}
                  </p>

                </div>

                {/* DELETE */}

                <button

                  onClick={() =>
                    onDeleteTask(
                      task._id
                    )
                  }

                  className="
                    w-12
                    h-12
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
                      task.priority
                    ]}
                  `}
                >
                  {task.priority}
                </div>

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
                      task.status
                    ]}
                  `}
                >
                  {task.status}
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

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-gray-500
                    dark:text-gray-400
                    text-sm
                  "
                >

                  <FiClock />

                  {

                    new Date(
                      task.createdAt
                    ).toLocaleDateString()
                  }

                </div>

                {

                  task.status ===
                  "completed"

                  && (

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-green-500
                        font-semibold
                      "
                    >

                      <FiCheckCircle />

                      Done

                    </div>
                  )
                }

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default TaskList;