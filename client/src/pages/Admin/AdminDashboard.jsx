import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import AnalyticsOverview from '../../components/admin/AnalyticsOverview/AnalyticsOverview';

import UserManagement from '../../components/admin/UserManagement/UserManagement';

function AdminDashboard() {

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
          Admin Dashboard 👑
        </h1>

      </div>

      <AnalyticsOverview />

      <div className="mt-10">

        <UserManagement />

      </div>

    </DashboardLayout>

  );
}

export default AdminDashboard;