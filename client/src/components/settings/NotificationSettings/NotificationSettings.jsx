import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function NotificationSettings() {
  const options = [
    "Email Notifications",
    "Push Notifications",
    "AI Alerts",
    "Weekly Reports",
  ];

  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        Notification Settings 🔔
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <div className="flex flex-col gap-6">

          {options.map((item) => (

            <div
              key={item}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                pb-4
              "
            >
              <span className="text-xl">
                {item}
              </span>

              <input type="checkbox" defaultChecked />
            </div>

          ))}
        </div>

      </div>

    </DashboardLayout>
  );
}

export default NotificationSettings;