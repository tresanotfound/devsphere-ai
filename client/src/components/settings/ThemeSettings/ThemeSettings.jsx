import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function ThemeSettings() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        Theme Settings 🌙
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <div className="flex gap-6">

          <button
            className="
              bg-black
              border
              border-[#b9ff66]
              px-8
              py-5
              rounded-2xl
            "
          >
            Dark Mode
          </button>

          <button
            className="
              bg-white
              text-black
              px-8
              py-5
              rounded-2xl
            "
          >
            Light Mode
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default ThemeSettings;