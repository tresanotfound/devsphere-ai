// client/src/components/projects/ProjectMembers/ProjectMembers.jsx

import {
  FiUsers,
  FiPlus,
} from "react-icons/fi";

function ProjectMembers({

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
          justify-between
          mb-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
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
            <FiUsers />
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
              Team Members
            </h2>

            <p
              className="
                text-gray-600
                dark:text-gray-400
              "
            >
              Collaboration workspace
            </p>

          </div>

        </div>

        {/* ADD MEMBER */}

        <button
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >

          <FiPlus />

          Add

        </button>

      </div>

      {/* MEMBERS */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {

          project.members?.map(

            (member, index) => (

              <div

                key={

                  member._id
                  || index
                }

                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                "
              >

                {/* LEFT */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {/* AVATAR */}

                  <img

                    src={

                      member.avatar

                      ||

                      `https://ui-avatars.com/api/?name=${member.name}`
                    }

                    alt={member.name}

                    className="
                      w-12
                      h-12
                      rounded-full
                      border-2
                      border-[#b9ff66]
                    "
                  />

                  {/* INFO */}

                  <div>

                    <h3
                      className="
                        font-semibold
                        text-black
                        dark:text-white
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-600
                        dark:text-gray-400
                      "
                    >
                      {member.email}
                    </p>

                  </div>

                </div>

                {/* ROLE */}

                <div
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-[#b9ff66]/20
                    text-[#7ed321]
                    text-sm
                    font-semibold
                  "
                >

                  {

                    project.owner?._id
                    === member._id

                      ? "Owner"

                      : "Member"
                  }

                </div>

              </div>
            ))
        }

      </div>

    </div>
  );
}

export default ProjectMembers;