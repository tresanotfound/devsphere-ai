import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import Reports from '../../components/analytics/Reports/Reports';

function Overview() {

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
        Workspace Overview 📊
      </h1>

      <Reports />

    </DashboardLayout>

  );
}

export default Overview;