import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ProfileSettings from '../../components/settings/ProfileSettings/ProfileSettings';

function ProfilePage() {

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
        Profile 👤
      </h1>

      <ProfileSettings />

    </DashboardLayout>

  );
}

export default ProfilePage;