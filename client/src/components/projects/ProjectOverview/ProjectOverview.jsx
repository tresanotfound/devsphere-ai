// client/src/components/projects/ProjectOverview/ProjectOverview.jsx

import {
  FiFolder,
  FiCheckCircle,
  FiLoader,
  FiClock,
} from "react-icons/fi";

function ProjectOverview({

  projects,

}) {

  // TOTAL PROJECTS

  const totalProjects =
    projects.length;

  // ACTIVE PROJECTS

  const activeProjects =
    projects.filter(

      (project) =>

        project.status
        === "active"
    ).length;

  // COMPLETED PROJECTS

  const completedProjects =
    projects.filter(

      (project) =>

        project.status
        === "completed"
    ).length;

  // ON HOLD PROJECTS

  const onHoldProjects =
    projects.filter(

      (project) =>

        project.status
        === "on-hold"
    ).length;

  // CARDS

  const cards = [

    {

      title:
        "Total Projects",

      value:
        totalProjects,

      icon:
        <FiFolder />,

      bg:
        "bg-blue-500/10",

      text:
        "text-blue-500",
    },

    {

      title:
        "Active Projects",

      value:
        activeProjects,

      icon:
        <FiLoader />,

      bg:
        "bg-green-500/10",

      text:
        "text-green-500",
    },

    {

      title:
        "Completed",

      value:
        completedProjects,

      icon:
        <FiCheckCircle />,

      bg:
        "bg-[#b9ff66]/20",

      text:
        "text-[#7ed321]",
    },

    {

      title:
        "On Hold",

      value:
        onHoldProjects,

      icon:
        <FiClock />,

      bg:
        "bg-yellow-500/10",

      text:
        "text-yellow-500",
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

        cards.map((card) => (

          <div

            key={card.title}

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

              <div>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    text-sm
                  "
                >
                  {card.title}
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
                  {card.value}
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
                  ${card.bg}
                  ${card.text}
                `}
              >
                {card.icon}
              </div>

            </div>

          </div>
        ))
      }

    </div>
  );
}

export default ProjectOverview;