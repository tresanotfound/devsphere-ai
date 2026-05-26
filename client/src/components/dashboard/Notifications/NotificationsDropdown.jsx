import {

  motion,
  AnimatePresence,

} from 'framer-motion';

import {

  FiCheckCircle,
  FiAlertCircle,
  FiCpu,

} from 'react-icons/fi';

function NotificationsDropdown({

  open,

}) {

  const notifications = [

    {
      id: 1,
      title: 'AI Summary Generated',
      message: 'Your AI notes are ready.',
      icon: <FiCpu />,
    },

    {
      id: 2,
      title: 'Project Updated',
      message: 'Dashboard redesign completed.',
      icon: <FiCheckCircle />,
    },

    {
      id: 3,
      title: 'System Alert',
      message: 'New login detected.',
      icon: <FiAlertCircle />,
    },

  ];

  return (

    <AnimatePresence>

      {

        open && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}

            transition={{
              duration: 0.2,
            }}

            className="
              absolute
              right-0
              top-[70px]
              w-[360px]
              glass-card
              border
              border-white/10
              p-5
              rounded-3xl
              shadow-2xl
              z-50
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

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Notifications
              </h2>

              <span
                className="
                  bg-[#b9ff66]
                  text-black
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-bold
                "
              >
                3 New
              </span>

            </div>

            {/* ITEMS */}

            <div className="space-y-4">

              {

                notifications.map((item) => (

                  <div

                    key={item.id}

                    className="
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      p-4
                      hover:bg-white/10
                      transition
                      cursor-pointer
                    "
                  >

                    <div
                      className="
                        flex
                        gap-4
                      "
                    >

                      {/* ICON */}

                      <div
                        className="
                          text-[#b9ff66]
                          text-2xl
                          mt-1
                        "
                      >
                        {item.icon}
                      </div>

                      {/* CONTENT */}

                      <div>

                        <h3
                          className="
                            font-semibold
                            text-lg
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            text-gray-400
                            text-sm
                            mt-1
                          "
                        >
                          {item.message}
                        </p>

                      </div>

                    </div>

                  </div>

                ))
              }

            </div>

          </motion.div>

        )
      }

    </AnimatePresence>
  );
}

export default NotificationsDropdown;