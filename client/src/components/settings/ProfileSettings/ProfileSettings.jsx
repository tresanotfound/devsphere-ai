import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function ProfileSettings() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        Profile Settings 👤
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <div className="flex items-center gap-6 mb-8">

          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="
              w-24
              h-24
              rounded-full
              border-4
              border-[#b9ff66]
            "
          />

          <div>

            <h2 className="text-3xl font-bold">
              Treesa George
            </h2>

            <p className="text-gray-400">
              Frontend Developer
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="glass-input"
          />

          <input
            type="email"
            placeholder="Email"
            className="glass-input"
          />

          <input
            type="text"
            placeholder="Role"
            className="glass-input"
          />

          <input
            type="text"
            placeholder="Location"
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
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}

export default ProfileSettings;