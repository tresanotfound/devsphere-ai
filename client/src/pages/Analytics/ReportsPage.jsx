import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import Reports from '../../components/analytics/Reports/Reports';

function ReportsPage() {

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
          Reports 📑
        </h1>

      </div>

      <Reports />

    </DashboardLayout>

  );
}

export default ReportsPage;