// client/src/components/analytics/BarChart/BarChart.jsx

import {

  BarChart as ReBarChart,

  Bar,

  XAxis,

  YAxis,

  Tooltip,

  ResponsiveContainer,

  CartesianGrid,

} from "recharts";

function BarChart({

  analytics,

}) {

  if (!analytics) return null;



  /* =========================================
     DATA
  ========================================= */

  const data = [

    {

      name:
        "Tasks",

      completed:
        analytics.tasks.completed,

      total:
        analytics.tasks.total,
    },

    {

      name:
        "Projects",

      completed:
        analytics.projects.completed,

      total:
        analytics.projects.total,
    },

    {

      name:
        "Notes",

      completed:
        analytics.notes.total,

      total:
        analytics.notes.total,
    },
  ];



  return (

    <div
      className="
        glass-card
        p-7
        rounded-3xl
        h-[420px]
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
          Workspace Overview
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Real productivity metrics
        </p>

      </div>



      {/* CHART */}

      <ResponsiveContainer
        width="100%"
        height="80%"
      >

        <ReBarChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.08)"
          />

          <XAxis
            dataKey="name"
            stroke="#9ca3af"
          />

          <YAxis
            stroke="#9ca3af"
          />

          <Tooltip />

          {/* COMPLETED */}

          <Bar
            dataKey="completed"
            fill="#b9ff66"
            radius={[8,8,0,0]}
          />

          {/* TOTAL */}

          <Bar
            dataKey="total"
            fill="#3b82f6"
            radius={[8,8,0,0]}
          />

        </ReBarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default BarChart;