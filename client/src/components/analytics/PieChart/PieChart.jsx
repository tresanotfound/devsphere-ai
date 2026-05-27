// client/src/components/analytics/PieChart/PieChart.jsx

import {

  PieChart as RePieChart,

  Pie,

  Cell,

  Tooltip,

  ResponsiveContainer,

  Legend,

} from "recharts";

function PieChart({

  analytics,

}) {

  if (!analytics) return null;



  /* =========================================
     DATA
  ========================================= */

  const data = [

    {

      name:
        "Completed",

      value:
        analytics.tasks.completed,
    },

    {

      name:
        "Pending",

      value:
        analytics.tasks.pending,
    },
  ];



  /* =========================================
     COLORS
  ========================================= */

  const COLORS = [

    "#b9ff66",

    "#facc15",
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
          Task Distribution
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Completed vs pending tasks
        </p>

      </div>



      {/* CHART */}

      <ResponsiveContainer
        width="100%"
        height="80%"
      >

        <RePieChart>

          <Pie

            data={data}

            cx="50%"

            cy="50%"

            outerRadius={120}

            dataKey="value"

            label
          >

            {

              data.map(

                (
                  entry,
                  index
                ) => (

                  <Cell

                    key={`cell-${index}`}

                    fill={
                      COLORS[index]
                    }
                  />
                ))
            }

          </Pie>

          <Tooltip />

          <Legend />

        </RePieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PieChart;