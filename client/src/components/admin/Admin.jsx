// client/src/components/admin/Admin.jsx

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import {
  FiUsers,
  FiShield,
  FiCpu,
  FiAlertTriangle,
  FiDatabase,
  FiBarChart2,
  FiFileText,
} from "react-icons/fi";

import { motion } from "framer-motion";

function Admin() {

  const adminCards = [

    {
      title: "Total Users",
      value: "12,480",
      icon: <FiUsers />,
      color: "from-[#b9ff66] to-[#7cf29a]",
    },

    {
      title: "AI Requests",
      value: "84K",
      icon: <FiCpu />,
      color: "from-cyan-400 to-blue-500",
    },

    {
      title: "Threat Alerts",
      value: "18",
      icon: <FiAlertTriangle />,
      color: "from-red-400 to-pink-500",
    },

    {
      title: "Server Health",
      value: "98%",
      icon: <FiShield />,
      color: "from-purple-400 to-indigo-500",
    },

  ];

  const recentUsers = [

    {
      name: "Treesa George",
      role: "Admin",
      status: "Active",
    },

    {
      name: "John Carter",
      role: "Developer",
      status: "Active",
    },

    {
      name: "Sarah Wilson",
      role: "Manager",
      status: "Blocked",
    },

    {
      name: "David Miller",
      role: "Designer",
      status: "Active",
    },

  ];

  const logs = [

    "AI workspace updated successfully",
    "New user registered",
    "Security scan completed",
    "Admin changed billing settings",
    "Server analytics generated",

  ];

  return (

    <DashboardLayout>

      {/* HEADER */}

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

          className="
            text-5xl
            xl:text-6xl
            font-extrabold
            tracking-tight
          "
        >

          Admin Control Center 🛡️

        </motion.h1>

        <p
          className="
            text-gray-400
            mt-4
            text-lg
            xl:text-xl
          "
        >
          Monitor platform performance,
          users, security and analytics.
        </p>

      </div>

      {/* TOP CARDS */}

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

          adminCards.map((card, index) => (

            <motion.div

              key={card.title}

              initial={{
                opacity: 0,
                y: 20,
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
                border
                border-white/10
                hover:scale-[1.02]
                transition-all
                duration-300
                min-h-[160px]
                overflow-hidden
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  h-full
                "
              >

                {/* LEFT */}

                <div className="flex-1">

                  <p
                    className="
                      text-gray-400
                      text-base
                      mb-3
                    "
                  >
                    {card.title}
                  </p>

                  <h2
                    className="
                      text-4xl
                      xl:text-5xl
                      font-extrabold
                      leading-tight
                    "
                  >
                    {card.value}
                  </h2>

                </div>

                {/* RIGHT ICON */}

                <div
                  className={`
                    flex
                    items-center
                    justify-center
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    ${card.color}
                    text-black
                    text-3xl
                    shrink-0
                  `}
                >
                  {card.icon}
                </div>

              </div>

            </motion.div>

          ))
        }

      </div>

      {/* MAIN GRID */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
          mt-10
        "
      >

        {/* USER MANAGEMENT */}

        <div
          className="
            xl:col-span-2
            glass-card
            p-8
            rounded-3xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
            "
          >

            <FiUsers className="text-4xl text-[#b9ff66]" />

            <h2
              className="
                text-3xl
                xl:text-4xl
                font-bold
              "
            >
              User Management
            </h2>

          </div>

          <div className="space-y-5">

            {

              recentUsers.map((user) => (

                <div

                  key={user.name}

                  className="
                    flex
                    items-center
                    justify-between
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-6
                    py-5
                  "
                >

                  <div>

                    <h3 className="text-xl font-semibold">
                      {user.name}
                    </h3>

                    <p className="text-gray-400">
                      {user.role}
                    </p>

                  </div>

                  <span
                    className={`
                      px-4
                      py-2
                      rounded-xl
                      text-sm
                      font-semibold

                      ${
                        user.status === "Active"
                          ? "bg-[#b9ff66] text-black"
                          : "bg-red-500 text-white"
                      }
                    `}
                  >
                    {user.status}
                  </span>

                </div>

              ))
            }

          </div>

        </div>

        {/* SYSTEM LOGS */}

        <div
          className="
            glass-card
            p-8
            rounded-3xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
            "
          >

            <FiDatabase className="text-4xl text-cyan-400" />

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              System Logs
            </h2>

          </div>

          <div className="space-y-4">

            {

              logs.map((log, index) => (

                <div

                  key={index}

                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    text-gray-300
                  "
                >
                  {log}
                </div>

              ))
            }

          </div>

        </div>

      </div>

      {/* ANALYTICS + REPORTS */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
          mt-10
        "
      >

        {/* ANALYTICS */}

        <div
          className="
            glass-card
            p-8
            rounded-3xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
            "
          >

            <FiBarChart2 className="text-4xl text-[#b9ff66]" />

            <h2
              className="
                text-3xl
                xl:text-4xl
                font-bold
              "
            >
              Analytics Overview
            </h2>

          </div>

          <div className="space-y-6">

            <div>

              <p className="text-gray-400 mb-2">
                AI Usage
              </p>

              <div className="w-full bg-white/10 rounded-full h-4">

                <div
                  className="
                    bg-[#b9ff66]
                    h-4
                    rounded-full
                    w-[85%]
                  "
                />

              </div>

            </div>

            <div>

              <p className="text-gray-400 mb-2">
                Server Performance
              </p>

              <div className="w-full bg-white/10 rounded-full h-4">

                <div
                  className="
                    bg-cyan-400
                    h-4
                    rounded-full
                    w-[72%]
                  "
                />

              </div>

            </div>

            <div>

              <p className="text-gray-400 mb-2">
                Security Score
              </p>

              <div className="w-full bg-white/10 rounded-full h-4">

                <div
                  className="
                    bg-purple-400
                    h-4
                    rounded-full
                    w-[91%]
                  "
                />

              </div>

            </div>

          </div>

        </div>

        {/* REPORTS */}

        <div
          className="
            glass-card
            p-8
            rounded-3xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
            "
          >

            <FiFileText className="text-4xl text-pink-400" />

            <h2
              className="
                text-3xl
                xl:text-4xl
                font-bold
              "
            >
              Reports Management
            </h2>

          </div>

          <div className="space-y-5">

            <button
              className="
                w-full
                bg-[#b9ff66]
                text-black
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition
              "
            >
              Generate AI Report
            </button>

            <button
              className="
                w-full
                bg-cyan-400
                text-black
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition
              "
            >
              Export User Analytics
            </button>

            <button
              className="
                w-full
                bg-purple-400
                text-black
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition
              "
            >
              Download Security Logs
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Admin;