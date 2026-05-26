import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

function ProjectDetails() {

  return (

    <DashboardLayout>

      <div
        className="
          bg-gray-900
          border
          border-gray-800
          rounded-2xl
          p-8
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          DevSphere AI Platform
        </h1>

        <p className="text-gray-400 mt-5">
          Enterprise productivity SaaS platform built with React and AI.
        </p>

      </div>

    </DashboardLayout>

  );
}

export default ProjectDetails;