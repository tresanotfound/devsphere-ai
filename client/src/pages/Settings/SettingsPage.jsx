import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import ProfileSettings from '../../components/settings/ProfileSettings/ProfileSettings';

import SecuritySettings from '../../components/settings/SecuritySettings/SecuritySettings';

import ThemeSettings from '../../components/settings/ThemeSettings/ThemeSettings';

import NotificationSettings from '../../components/settings/NotificationSettings/NotificationSettings';

function SettingsPage() {

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
          Workspace Settings ⚙️
        </h1>

      </div>

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
        "
      >

        <ProfileSettings />

        <SecuritySettings />

        <ThemeSettings />

        <NotificationSettings />

      </div>

    </DashboardLayout>

  );
}

export default SettingsPage;