import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ProjectOverview from '../../components/projects/ProjectOverview/ProjectOverview';

function ProjectsPage() {

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
          Projects 
        </h1>

        <p className="text-gray-400 mt-3">
          Track all active DevSphere AI projects.
        </p>

      </div>

      <ProjectOverview />

    </DashboardLayout>

  );
}

export default ProjectsPage;