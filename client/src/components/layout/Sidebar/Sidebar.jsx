// client/src/components/layout/Sidebar/Sidebar.jsx

import {

  FiHome,
  FiCheckSquare,
  FiFolder,
  FiMessageCircle,
  FiBarChart2,
  FiSettings,
  FiCpu,
  FiFileText,
  FiShield,
  FiX,

} from 'react-icons/fi';

import {

  NavLink,

} from 'react-router-dom';

function Sidebar({

  mobileOpen,
  setMobileOpen,

}) {

  const navItems = [

    {
      name: 'Dashboard',
      icon: <FiHome />,
      path: '/dashboard',
    },

    {
      name: 'Tasks',
      icon: <FiCheckSquare />,
      path: '/tasks',
    },

    {
      name: 'Projects',
      icon: <FiFolder />,
      path: '/projects',
    },

    {
      name: 'AI Workspace',
      icon: <FiCpu />,
      path: '/ai',
    },

    {
      name: 'Notes',
      icon: <FiFileText />,
      path: '/notes',
    },

    {
      name: 'Chat',
      icon: <FiMessageCircle />,
      path: '/chat',
    },

    {
      name: 'Analytics',
      icon: <FiBarChart2 />,
      path: '/analytics',
    },

    {
      name: 'Settings',
      icon: <FiSettings />,
      path: '/settings',
    },

    {
      name: 'Admin',
      icon: <FiShield />,
      path: '/admin',
    },

  ];

  return (

    <>

      {/* OVERLAY */}

      {

        mobileOpen && (

          <div

            onClick={() =>
              setMobileOpen(false)
            }

            className="
              fixed
              inset-0
              bg-black/50
              z-40
              lg:hidden
            "
          />

        )
      }

      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[280px]
          bg-black/20
          backdrop-blur-2xl
          border-r
          border-white/10
          z-50
          transition-transform
          duration-300

          ${
            mobileOpen

              ? 'translate-x-0'

              : '-translate-x-full'
          }

          lg:translate-x-0
        `}
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
            border-white/10
          "
        >

          <div>

            <h1
              className="
                text-3xl
                font-extrabold
              "
            >
              DevSphere
            </h1>

            <p
              className="
                text-[#b9ff66]
                text-sm
                mt-1
              "
            >
              AI Workspace
            </p>

          </div>

          {/* CLOSE */}

          <button
            onClick={() =>
              setMobileOpen(false)
            }

            className="
              text-2xl
              text-white
              lg:hidden
            "
          >
            <FiX />
          </button>

        </div>

        {/* NAVIGATION */}

        <nav
          className="
            flex
            flex-col
            gap-3
            mt-6
            px-4
            overflow-y-auto
            h-[calc(100vh-120px)]
            pb-10
          "
        >

          {

            navItems.map((item) => (

              <NavLink

                key={item.name}

                to={item.path}

                onClick={() =>
                  setMobileOpen(false)
                }

                className={({ isActive }) =>

                  `
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    font-medium
                    border

                    ${

                      isActive

                        ? `
                          bg-gradient-to-r
                          from-[#b9ff66]
                          to-[#7cf29a]
                          text-black
                          border-transparent
                          shadow-lg
                        `

                        : `
                          text-gray-300
                          border-transparent
                          hover:bg-white/5
                          hover:border-white/10
                        `
                    }
                  `
                }
              >

                <span className="text-2xl">

                  {item.icon}

                </span>

                <span>

                  {item.name}

                </span>

              </NavLink>

            ))
          }

        </nav>

      </aside>

    </>
  );
}

export default Sidebar;