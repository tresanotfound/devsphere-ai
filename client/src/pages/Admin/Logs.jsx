import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import SystemLogs from '../../components/admin/SystemLogs/SystemLogs';

function Logs() {

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
        System Logs 📜
      </h1>

      <SystemLogs />

    </DashboardLayout>

  );
}

export default Logs;