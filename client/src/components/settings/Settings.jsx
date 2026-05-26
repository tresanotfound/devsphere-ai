import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import {
  FiUser,
  FiBell,
  FiShield,
  FiMoon,
  FiCreditCard,
  FiCpu,
} from "react-icons/fi";

function Settings() {

  const settingCards = [

    {
      title: "Profile Settings",
      desc: "Manage your profile information",
      icon: <FiUser />,
      path: "/settings/profile",
    },

    {
      title: "Notification Settings",
      desc: "Control alerts and notifications",
      icon: <FiBell />,
      path: "/settings/notifications",
    },

    {
      title: "Security Settings",
      desc: "Password and authentication",
      icon: <FiShield />,
      path: "/settings/security",
    },

    {
      title: "Theme Settings",
      desc: "Dark mode and UI customization",
      icon: <FiMoon />,
      path: "/settings/theme",
    },

    {
      title: "Billing Settings",
      desc: "Manage subscription and plans",
      icon: <FiCreditCard />,
      path: "/settings/billing",
    },

    {
      title: "AI Preferences",
      desc: "Customize AI assistant behavior",
      icon: <FiCpu />,
      path: "/settings/ai",
    },

  ];

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1
          className="
            text-6xl
            font-extrabold
          "
        >
          Settings ⚙️
        </h1>

        <p
          className="
            text-gray-400
            text-xl
            mt-4
          "
        >
          Manage your DevSphere AI workspace preferences.
        </p>

      </div>

      {/* SETTINGS GRID */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >

        {

          settingCards.map((card) => (

            <div

              key={card.title}

              className="
                glass-card
                p-8
                rounded-3xl
                border
                border-white/10
                hover:border-[#b9ff66]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >

              {/* ICON */}

              <div
                className="
                  text-5xl
                  text-[#b9ff66]
                  mb-6
                "
              >
                {card.icon}
              </div>

              {/* TITLE */}

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                {card.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  text-gray-400
                  mt-4
                "
              >
                {card.desc}
              </p>

              {/* BUTTON */}

              <a

                href={card.path}

                className="
                  inline-block
                  mt-8
                  bg-[#b9ff66]
                  text-black
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Open
              </a>

            </div>

          ))
        }

      </div>

    </DashboardLayout>
  );
}

export default Settings;