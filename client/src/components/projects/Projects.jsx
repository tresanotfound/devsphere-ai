import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import CreateProject from "./CreateProject/CreateProject";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import ProjectActivity from "./ProjectActivity/ProjectActivity";
import ProjectMembers from "./ProjectMembers/ProjectMembers";
import ProjectFiles from "./ProjectFiles/ProjectFiles";

function Projects() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">

        <h1 className="text-5xl font-bold">
          Projects 🚀
        </h1>

        <ProjectOverview />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <ProjectActivity />

          <ProjectMembers />

        </div>

        <ProjectFiles />

        <CreateProject />

      </div>
    </DashboardLayout>
  );
}

export default Projects;