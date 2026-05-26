// client/src/pages/Dashboard/DashboardHome.jsx

import DashboardLayout from "../../components/layout/DashboardLayout/DashboardLayout";

import {
  motion,
} from "framer-motion";

import {
  FiCpu,
  FiActivity,
  FiCheckCircle,
  FiFolder,
} from "react-icons/fi";

import AnalyticsChart from "../../components/dashboard/AnalyticsChart/AnalyticsChart";

import ProductivityGraph from "../../components/dashboard/ProductivityGraph/ProductivityGraph";

import KanbanBoard from "../../components/tasks/KanbanBoard/KanbanBoard";

function DashboardHome() {

  const cards = [

    {
      title: "AI Requests",
      value: "1,284",
      icon: <FiCpu />,
    },

    {
      title: "Completed Tasks",
      value: "382",
      icon: <FiCheckCircle />,
    },

    {
      title: "Projects",
      value: "24",
      icon: <FiFolder />,
    },

    {
      title: "Activity Score",
      value: "92%",
      icon: <FiActivity />,
    },

  ];

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="mb-12">

        <motion.h1

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="
            text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
            text-black
            dark:text-white
          "
        >

          DevSphere AI 🚀

        </motion.h1>

        <p
          className="
            text-gray-600
            dark:text-gray-400
            mt-4
            text-lg
            md:text-xl
            max-w-3xl
          "
        >
          AI-powered productivity platform
          for modern development teams.
        </p>

      </div>

      {/* STATS CARDS */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {

          cards.map((card, index) => (

            <motion.div

              key={card.title}

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
              }}

              className="
                glass-card
                p-6
                rounded-3xl
                hover:scale-[1.02]
                transition-all
                duration-300
                border
                border-white/10
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                {/* TEXT */}

                <div>

                  <p
                    className="
                      text-gray-600
                      dark:text-gray-400
                      text-sm
                      md:text-base
                    "
                  >
                    {card.title}
                  </p>

                  <h2
                    className="
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      mt-3
                      text-black
                      dark:text-white
                    "
                  >
                    {card.value}
                  </h2>

                </div>

                {/* ICON */}

                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-[#b9ff66]
                    to-[#7cf29a]
                    text-black
                    text-4xl
                    shadow-lg
                  "
                >
                  {card.icon}
                </div>

              </div>

            </motion.div>

          ))
        }

      </div>

      {/* CHARTS */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
          mt-10
        "
      >

        {/* AI ANALYTICS */}

        <div
          className="
            glass-card
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-8
              text-black
              dark:text-white
            "
          >
            AI Analytics
          </h2>

          <AnalyticsChart />

        </div>

        {/* PRODUCTIVITY */}

        <div
          className="
            glass-card
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-8
              text-black
              dark:text-white
            "
          >
            Productivity
          </h2>

          <ProductivityGraph />

        </div>

      </div>

      {/* KANBAN */}

      <div className="mt-10">

        <div
          className="
            glass-card
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          <h2
            className="
              text-4xl
              font-extrabold
              mb-8
              text-black
              dark:text-white
            "
          >
            Team Workflow
          </h2>

          <KanbanBoard />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default DashboardHome;