import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";
import Heatmap from "./Heatmap/Heatmap";
import Reports from "./Reports/Reports";

function Analytics() {
  return (
    <DashboardLayout>

      <div className="p-8 space-y-8">

        <h1 className="text-5xl font-bold">
          Analytics 📊
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <BarChart />

          <LineChart />

          <PieChart />

          <Heatmap />

        </div>

        <Reports />

      </div>

    </DashboardLayout>
  );
}

export default Analytics;