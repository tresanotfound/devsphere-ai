import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import KanbanBoard from '../../components/tasks/KanbanBoard/KanbanBoard';

function TasksPage() {

  return (

    <DashboardLayout>

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-bold
            text-white
          "
        >
          Tasks Workspace ✅
        </h1>

        <p className="text-gray-400 mt-3">
          Manage and organize team tasks.
        </p>

      </div>

      <KanbanBoard />

    </DashboardLayout>

  );
}

export default TasksPage;