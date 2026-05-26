import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ReportsManagement from '../../components/admin/ReportsManagement/ReportsManagement';

function Reports() {

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
        Reports 🚨
      </h1>

      <ReportsManagement />

    </DashboardLayout>

  );
}

export default Reports;