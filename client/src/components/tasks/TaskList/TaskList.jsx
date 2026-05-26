import TaskCard from '../TaskCard/TaskCard';

function TaskList() {

  const tasks = [
    {
      title: 'Build Dashboard UI',
      description:
        'Create analytics dashboard layout.',
      status: 'In Progress',
    },
    {
      title: 'Setup Backend',
      description:
        'Initialize Express server.',
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-6">

      {tasks.map((task, index) => (

        <TaskCard
          key={index}
          title={task.title}
          description={task.description}
          status={task.status}
        />

      ))}

    </div>
  );
}

export default TaskList;