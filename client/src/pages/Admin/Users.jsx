import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import UserManagement from '../../components/admin/UserManagement/UserManagement';

function Users() {

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
        Users 👥
      </h1>

      <UserManagement />

    </DashboardLayout>

  );
}

export default Users;