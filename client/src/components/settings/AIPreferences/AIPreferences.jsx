import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function AIPreferences() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        AI Preferences 🤖
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <div className="flex flex-col gap-6">

          <select className="glass-input">

            <option>GPT-4 Turbo</option>
            <option>Claude AI</option>
            <option>Gemini AI</option>

          </select>

          <select className="glass-input">

            <option>Creative Mode</option>
            <option>Balanced Mode</option>
            <option>Precise Mode</option>

          </select>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AIPreferences;