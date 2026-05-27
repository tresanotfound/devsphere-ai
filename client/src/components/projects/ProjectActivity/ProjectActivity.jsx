// client/src/components/projects/ProjectActivity/ProjectActivity.jsx

import {
  FiActivity,
  FiClock,
} from "react-icons/fi";

function ProjectActivity({

  project,

}) {

  return (

    <div
      className="
        glass-card
        p-6
        rounded-3xl
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
        "
      >

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-[#b9ff66]
            text-black
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FiActivity />
        </div>

        <div>

          <h2
            className="
              text-2xl
              font-bold
              text-black
              dark:text-white
            "
          >
            Project Activity
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
            "
          >
            Recent workspace updates
          </p>

        </div>

      </div>

      {/* EMPTY STATE */}

      {

        (!project.activityLogs

          ||

          project.activityLogs
            .length === 0)

        && (

          <div
            className="
              text-center
              py-12
            "
          >

            <p
              className="
                text-gray-500
              "
            >
              No activity yet 🚀
            </p>

          </div>
        )
      }

      {/* ACTIVITY TIMELINE */}

      <div
        className="
          flex
          flex-col
          gap-6
        "
      >

        {

          project.activityLogs

            ?.slice()

            .reverse()

            .map(

              (
                log,
                index
              ) => (

                <div

                  key={index}

                  className="
                    flex
                    gap-4
                    relative
                  "
                >

                  {/* TIMELINE */}

                  <div
                    className="
                      flex
                      flex-col
                      items-center
                    "
                  >

                    {/* DOT */}

                    <div
                      className="
                        w-4
                        h-4
                        rounded-full
                        bg-[#b9ff66]
                        mt-1
                      "
                    />

                    {/* LINE */}

                    {

                      index !==
                      project.activityLogs.length - 1

                      && (

                        <div
                          className="
                            w-[2px]
                            flex-1
                            bg-[#b9ff66]/30
                            mt-2
                          "
                        />
                      )
                    }

                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      flex-1
                      pb-6
                    "
                  >

                    <div
                      className="
                        bg-black/5
                        dark:bg-white/5
                        border
                        border-black/10
                        dark:border-white/10
                        rounded-2xl
                        p-5
                      "
                    >

                      {/* ACTION */}

                      <h3
                        className="
                          font-semibold
                          text-black
                          dark:text-white
                        "
                      >
                        {log.action}
                      </h3>

                      {/* DATE */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          mt-3
                          text-sm
                          text-gray-500
                        "
                      >

                        <FiClock />

                        {

                          new Date(

                            log.createdAt
                          ).toLocaleString()
                        }

                      </div>

                    </div>

                  </div>

                </div>
              ))
        }

      </div>

    </div>
  );
}

export default ProjectActivity;