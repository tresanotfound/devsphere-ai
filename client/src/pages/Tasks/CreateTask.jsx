import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import TaskForm from '../../components/tasks/TaskForm/TaskForm';

function CreateTask() {

  return (

    <DashboardLayout>

      <h1
        className="
          text-5xl
          font-bold
          text-white
          mb-10
        "
      >
        Create Task ✨
      </h1>

      <TaskForm />

    </DashboardLayout>

  );
}

export default CreateTask;