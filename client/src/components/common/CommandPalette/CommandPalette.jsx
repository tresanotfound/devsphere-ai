import {

  useEffect,
  useState,

} from 'react';

import {

  motion,
  AnimatePresence,

} from 'framer-motion';

import {

  useNavigate,

} from 'react-router-dom';

import {

  FiSearch,

} from 'react-icons/fi';

function CommandPalette() {

  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const [search, setSearch] =
    useState('');

  const commands = [

    {
      name: 'Dashboard',
      path: '/dashboard',
    },

    {
      name: 'Tasks',
      path: '/tasks',
    },

    {
      name: 'Projects',
      path: '/projects',
    },

    {
      name: 'AI Workspace',
      path: '/ai',
    },

    {
      name: 'Notes',
      path: '/notes',
    },

    {
      name: 'Chat',
      path: '/chat',
    },

    {
      name: 'Analytics',
      path: '/analytics',
    },

    {
      name: 'Settings',
      path: '/settings',
    },

    {
      name: 'Admin',
      path: '/admin',
    },

  ];

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (

        (e.ctrlKey || e.metaKey)

        && e.key === 'k'
      ) {

        e.preventDefault();

        setOpen((prev) => !prev);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () =>

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

  }, []);

  const filteredCommands =

    commands.filter((cmd) =>

      cmd.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <AnimatePresence>

      {

        open && (

          <>

            {/* BACKDROP */}

            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              exit={{ opacity: 0 }}

              onClick={() =>
                setOpen(false)
              }

              className="
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm
                z-[100]
              "
            />

            {/* MODAL */}

            <motion.div

              initial={{
                opacity: 0,
                y: -40,
                scale: 0.95,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: -40,
                scale: 0.95,
              }}

              transition={{
                duration: 0.2,
              }}

              className="
                fixed
                top-[15%]
                left-1/2
                -translate-x-1/2
                w-[92%]
                max-w-2xl
                glass-card
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                z-[101]
                shadow-2xl
              "
            >

              {/* SEARCH */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  px-6
                  py-5
                  border-b
                  border-white/10
                "
              >

                <FiSearch
                  className="
                    text-2xl
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  placeholder="Search pages..."

                  autoFocus

                  value={search}

                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }

                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-xl
                    text-white
                  "
                />

              </div>

              {/* RESULTS */}

              <div
                className="
                  max-h-[400px]
                  overflow-y-auto
                  p-3
                "
              >

                {

                  filteredCommands.map((cmd) => (

                    <button

                      key={cmd.path}

                      onClick={() => {

                        navigate(cmd.path);

                        setOpen(false);
                      }}

                      className="
                        w-full
                        text-left
                        px-5
                        py-4
                        rounded-2xl
                        hover:bg-white/10
                        transition
                        flex
                        items-center
                        justify-between
                        text-lg
                      "
                    >

                      <span>

                        {cmd.name}

                      </span>

                      <span
                        className="
                          text-gray-500
                          text-sm
                        "
                      >
                        ↵
                      </span>

                    </button>

                  ))
                }

              </div>

            </motion.div>

          </>

        )
      }

    </AnimatePresence>
  );
}

export default CommandPalette;