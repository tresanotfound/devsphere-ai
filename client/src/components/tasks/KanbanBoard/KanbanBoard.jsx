// client/src/components/tasks/KanbanBoard/KanbanBoard.jsx

import axios from "axios";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

import {
  FiCheckCircle,
  FiClock,
  FiLoader,
} from "react-icons/fi";

function KanbanBoard({

  tasks = [],
  setTasks = () => {},

}) {

  /* =========================================
     COLUMN CONFIG
  ========================================= */

  const columns = {

    todo: {

      title:
        "To Do",

      icon:
        <FiClock />,
    },

    "in-progress": {

      title:
        "In Progress",

      icon:
        <FiLoader />,
    },

    completed: {

      title:
        "Completed",

      icon:
        <FiCheckCircle />,
    },
  };



  /* =========================================
     HANDLE DRAG
  ========================================= */

  const handleDragEnd =
    async (result) => {

      // NO DESTINATION

      if (!result.destination)
        return;

      const {
        draggableId,
        destination,
      } = result;

      const updatedStatus =
        destination.droppableId;

      try {

        const token =
          localStorage.getItem(
            "token"
          );



        /* =========================================
           UPDATE BACKEND
        ========================================= */

        await axios.put(

          `http://localhost:5000/api/tasks/${draggableId}`,

          {
            status:
              updatedStatus,
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

        const updatedTasks =
          (tasks || []).map(

            (task) =>

              task._id ===
              draggableId

                ? {

                    ...task,

                    status:
                      updatedStatus,
                  }

                : task
          );

        setTasks(updatedTasks);

      } catch (error) {

        console.error(error);
      }
    };



  return (

    <div className="mt-14">

      {/* HEADER */}

      <div className="mb-8">

        <h2
          className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Workflow Board 🚀
        </h2>

        <p
          className="
            mt-3
            text-gray-600
            dark:text-gray-400
            text-lg
          "
        >
          Drag and drop tasks
          across workflow stages.
        </p>

      </div>



      {/* BOARD */}

      <DragDropContext
        onDragEnd={handleDragEnd}
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
          "
        >

          {

            Object.entries(columns)
              .map(([key, column]) => {

                /* =========================================
                   FILTER TASKS SAFELY
                ========================================= */

                const columnTasks =
                  (tasks || []).filter(

                    (task) =>

                      task?.status
                      === key
                  );



                return (

                  <Droppable
                    droppableId={key}
                    key={key}
                  >

                    {(provided) => (

                      <div

                        ref={
                          provided.innerRef
                        }

                        {...provided.droppableProps}

                        className="
                          glass-card
                          rounded-3xl
                          p-6
                          min-h-[500px]
                        "
                      >

                        {/* COLUMN HEADER */}

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            mb-6
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >

                            {/* ICON */}

                            <div
                              className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-[#b9ff66]
                                text-black
                                flex
                                items-center
                                justify-center
                                text-2xl
                              "
                            >
                              {column.icon}
                            </div>

                            {/* TITLE */}

                            <div>

                              <h3
                                className="
                                  text-2xl
                                  font-bold
                                  text-black
                                  dark:text-white
                                "
                              >
                                {column.title}
                              </h3>

                              <p
                                className="
                                  text-gray-500
                                  dark:text-gray-400
                                "
                              >
                                {
                                  columnTasks.length
                                } Tasks
                              </p>

                            </div>

                          </div>

                        </div>



                        {/* TASKS */}

                        <div
                          className="
                            space-y-4
                          "
                        >

                          {

                            columnTasks.map(

                              (
                                task,
                                index
                              ) => (

                                <Draggable

                                  key={
                                    task._id
                                  }

                                  draggableId={
                                    task._id
                                  }

                                  index={index}
                                >

                                  {(
                                    provided
                                  ) => (

                                    <div

                                      ref={
                                        provided.innerRef
                                      }

                                      {...provided.draggableProps}

                                      {...provided.dragHandleProps}

                                      className="
                                        bg-black/5
                                        dark:bg-white/5
                                        border
                                        border-black/10
                                        dark:border-white/10
                                        rounded-2xl
                                        p-5
                                        backdrop-blur-md
                                        hover:scale-[1.02]
                                        transition
                                      "
                                    >

                                      {/* TITLE */}

                                      <h4
                                        className="
                                          text-xl
                                          font-bold
                                          text-black
                                          dark:text-white
                                        "
                                      >
                                        {
                                          task.title
                                        }
                                      </h4>



                                      {/* DESCRIPTION */}

                                      <p
                                        className="
                                          mt-2
                                          text-sm
                                          text-gray-600
                                          dark:text-gray-400
                                        "
                                      >
                                        {
                                          task.description
                                            || "No description"
                                        }
                                      </p>



                                      {/* FOOTER */}

                                      <div
                                        className="
                                          flex
                                          items-center
                                          justify-between
                                          mt-5
                                        "
                                      >

                                        {/* PRIORITY */}

                                        <span
                                          className="
                                            px-3
                                            py-1
                                            rounded-xl
                                            text-xs
                                            font-semibold
                                            bg-[#b9ff66]/20
                                            text-[#b9ff66]
                                            capitalize
                                          "
                                        >
                                          {
                                            task.priority
                                              || "medium"
                                          }
                                        </span>



                                        {/* DATE */}

                                        <span
                                          className="
                                            text-xs
                                            text-gray-500
                                          "
                                        >
                                          {

                                            task.createdAt

                                              ? new Date(
                                                  task.createdAt
                                                ).toLocaleDateString()

                                              : "No date"
                                          }
                                        </span>

                                      </div>

                                    </div>
                                  )}

                                </Draggable>
                              ))
                          }

                          {provided.placeholder}

                        </div>

                      </div>
                    )}

                  </Droppable>
                );
              })
          }

        </div>

      </DragDropContext>

    </div>
  );
}

export default KanbanBoard;