import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import KanbanBoard from "./KanbanBoard/KanbanBoard";
import TaskTimeline from "./TaskTimeline/TaskTimeline";

function Tasks() {

  return (

    <DashboardLayout>

      <div className="p-8 space-y-8">

        <h1 className="text-5xl font-bold">
          Tasks 📋
        </h1>

        <KanbanBoard />

        <TaskTimeline />

      </div>

    </DashboardLayout>
  );
}

export default Tasks;