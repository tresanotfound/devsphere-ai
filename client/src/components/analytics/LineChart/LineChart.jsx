// client/src/components/analytics/LineChart/LineChart.jsx

import {

  LineChart as ReLineChart,

  Line,

  XAxis,

  YAxis,

  Tooltip,

  ResponsiveContainer,

  CartesianGrid,

} from "recharts";

function LineChart({

  analytics,

}) {

  if (!analytics) return null;



  /* =========================================
     MOCK PRODUCTIVITY TREND
     (Later from DB history)
  ========================================= */

  const data = [

    {
      day: "Mon",
      productivity: 35,
    },

    {
      day: "Tue",
      productivity: 48,
    },

    {
      day: "Wed",
      productivity: 58,
    },

    {
      day: "Thu",
      productivity: 65,
    },

    {
      day: "Fri",
      productivity:
        analytics.productivityScore,
    },

    {
      day: "Sat",
      productivity: 72,
    },

    {
      day: "Sun",
      productivity: 80,
    },
  ];



  return (

    <div
      className="
        glass-card
        p-7
        rounded-3xl
        h-[450px]
      "
    >

      {/* HEADER */}

      <div className="mb-6">

        <h2
          className="
            text-3xl
            font-bold
            text-black
            dark:text-white
          "
        >
          Productivity Trend 📈
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Weekly productivity growth
          and performance analytics.
        </p>

      </div>



      {/* CHART */}

      <ResponsiveContainer
        width="100%"
        height="80%"
      >

        <ReLineChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.08)"
          />

          <XAxis
            dataKey="day"
            stroke="#9ca3af"
          />

          <YAxis
            stroke="#9ca3af"
          />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="productivity"

            stroke="#b9ff66"

            strokeWidth={4}

            dot={{
              r: 6,
            }}

            activeDot={{
              r: 8,
            }}
          />

        </ReLineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default LineChart;