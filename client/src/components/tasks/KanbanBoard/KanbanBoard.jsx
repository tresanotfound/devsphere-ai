import {

  DragDropContext,
  Droppable,
  Draggable,

} from 'react-beautiful-dnd';

const tasks = {

  pending: [

    {
      id: '1',
      title: 'Design Landing Page',
    },

    {
      id: '2',
      title: 'Setup Backend',
    },

  ],

  progress: [

    {
      id: '3',
      title: 'Analytics Dashboard',
    },

  ],

  completed: [

    {
      id: '4',
      title: 'Project Setup',
    },

  ],

};

function KanbanBoard() {

  const onDragEnd = () => {};

  const columns = [

    {
      id: 'pending',
      title: 'Pending',
    },

    {
      id: 'progress',
      title: 'In Progress',
    },

    {
      id: 'completed',
      title: 'Completed',
    },

  ];

  return (

    <DragDropContext onDragEnd={onDragEnd}>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >

        {

          columns.map((column) => (

            <Droppable
              droppableId={column.id}
              key={column.id}
            >

              {(provided) => (

                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}

                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-5
                    min-h-[400px]
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-6
                    "
                  >
                    {column.title}
                  </h3>

                  {

                    tasks[column.id].map(

                      (task, index) => (

                        <Draggable
                          draggableId={task.id}
                          index={index}
                          key={task.id}
                        >

                          {(provided) => (

                            <div

                              ref={provided.innerRef}

                              {...provided.draggableProps}

                              {...provided.dragHandleProps}

                              className="
                                glass-card
                                p-5
                                mb-4
                                cursor-grab
                                hover-lift
                              "
                            >

                              <p
                                className="
                                  text-lg
                                  font-semibold
                                "
                              >
                                {task.title}
                              </p>

                            </div>

                          )}

                        </Draggable>

                      )
                    )
                  }

                  {provided.placeholder}

                </div>

              )}

            </Droppable>

          ))
        }

      </div>

    </DragDropContext>
  );
}

export default KanbanBoard;