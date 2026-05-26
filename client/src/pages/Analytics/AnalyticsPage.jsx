import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import BarChart from '../../components/analytics/BarChart/BarChart';

import PieChart from '../../components/analytics/PieChart/PieChart';

import LineChart from '../../components/analytics/LineChart/LineChart';

function AnalyticsPage() {

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
          Analytics Dashboard 📊
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

        <BarChart />

        <PieChart />

        <LineChart />

      </div>

    </DashboardLayout>

  );
}

export default AnalyticsPage;