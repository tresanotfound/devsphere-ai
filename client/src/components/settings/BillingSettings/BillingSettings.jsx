import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";

function BillingSettings() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-extrabold mb-8">
        Billing Settings 💳
      </h1>

      <div className="glass-card p-8 rounded-3xl">

        <h2 className="text-3xl font-bold">
          Current Plan
        </h2>

        <p className="text-gray-400 mt-2">
          DevSphere Pro Plan
        </p>

        <div className="mt-8">

          <button
            className="
              bg-[#b9ff66]
              text-black
              px-8
              py-3
              rounded-2xl
              font-bold
            "
          >
            Upgrade Plan
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default BillingSettings;