import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import CreateProject from '../../components/projects/CreateProject/CreateProject';

function CreateProjectPage() {

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
        Create Project 🚀
      </h1>

      <CreateProject />

    </DashboardLayout>

  );
}

export default CreateProjectPage;