import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ActivityFeed from '../../components/dashboard/ActivityFeed/ActivityFeed';

function Activity() {

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
        Activity Feed ⚡
      </h1>

      <ActivityFeed />

    </DashboardLayout>

  );
}

export default Activity;