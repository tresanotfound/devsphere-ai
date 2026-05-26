import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function SecuritySettings() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        Security Settings 🔒
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <div className="flex flex-col gap-6">

          <input
            type="password"
            placeholder="Current Password"
            className="glass-input"
          />

          <input
            type="password"
            placeholder="New Password"
            className="glass-input"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="glass-input"
          />

        </div>

        <button
          className="
            mt-8
            bg-[#b9ff66]
            text-black
            px-8
            py-3
            rounded-2xl
            font-bold
          "
        >
          Update Password
        </button>

      </div>

    </DashboardLayout>
  );
}

export default SecuritySettings;