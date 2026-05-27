// client/src/components/analytics/StatsCard/StatsCard.jsx

import {
  FiCheckCircle,
  FiClock,
  FiFolder,
  FiTrendingUp,
} from "react-icons/fi";

function StatsCard({

  analytics,

}) {

  // SAFETY

  if (!analytics) return null;



  /* =========================================
     STATS DATA
  ========================================= */

  const stats = [

    {

      title:
        "Completed Tasks",

      value:
        analytics.tasks.completed,

      icon:
        <FiCheckCircle />,

      color:
        "text-[#7ed321]",

      bg:
        "bg-[#b9ff66]/20",
    },

    {

      title:
        "Pending Tasks",

      value:
        analytics.tasks.pending,

      icon:
        <FiClock />,

      color:
        "text-yellow-500",

      bg:
        "bg-yellow-500/10",
    },

    {

      title:
        "Projects",

      value:
        analytics.projects.total,

      icon:
        <FiFolder />,

      color:
        "text-blue-500",

      bg:
        "bg-blue-500/10",
    },

    {

      title:
        "Productivity",

      value:
        `${analytics.productivityScore}%`,

      icon:
        <FiTrendingUp />,

      color:
        "text-green-500",

      bg:
        "bg-green-500/10",
    },
  ];



  return (

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      {

        stats.map(

          (stat) => (

            <div

              key={stat.title}

              className="
                glass-card
                p-7
                rounded-3xl
                hover:scale-[1.02]
                transition
              "
            >

              {/* TOP */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                {/* LEFT */}

                <div>

                  <p
                    className="
                      text-sm
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    {stat.title}
                  </p>

                  <h2
                    className="
                      mt-4
                      text-5xl
                      font-extrabold
                      text-black
                      dark:text-white
                    "
                  >
                    {stat.value}
                  </h2>

                </div>

                {/* ICON */}

                <div
                  className={`
                    w-16
                    h-16
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    text-3xl
                    ${stat.bg}
                    ${stat.color}
                  `}
                >
                  {stat.icon}
                </div>

              </div>

            </div>
          ))
      }

    </div>
  );
}

export default StatsCard;