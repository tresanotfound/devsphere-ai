// client/src/components/layout/Topbar/Topbar.jsx

import {
  useState,
} from "react";

import {
  FiMenu,
  FiBell,
  FiSearch,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import {
  useTheme,
} from "../../../context/ThemeContext";

import NotificationsDropdown
from "../../dashboard/Notifications/NotificationsDropdown";

function Topbar({

  setMobileOpen,

}) {

  const {

    theme,
    toggleTheme,

  } = useTheme();

  const [
    openNotifications,
    setOpenNotifications,
  ] = useState(false);

  return (

    <header
      className="
        sticky
        top-0
        z-30
        bg-white/60
        dark:bg-black/20
        backdrop-blur-xl
        border-b
        border-black/10
        dark:border-white/10
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        py-4
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          relative
        "
      >

        {/* LEFT */}

        <div
          className="
            flex
            items-center
            gap-4
            w-full
          "
        >

          {/* MOBILE MENU */}

          <button

            onClick={() =>
              setMobileOpen(true)
            }

            className="
              text-2xl
              text-black
              dark:text-white
              lg:hidden
            "
          >
            <FiMenu />
          </button>

          {/* SEARCH BAR */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              px-5
              py-3
              rounded-2xl
              w-full
              max-w-[420px]
              backdrop-blur-md
            "
          >

            <FiSearch
              className="
                text-gray-500
                dark:text-gray-400
                text-xl
              "
            />

            <div
              className="
                flex
                items-center
                justify-between
                w-full
              "
            >

              <input
                type="text"
                placeholder="Search..."

                className="
                  bg-transparent
                  outline-none
                  text-black
                  dark:text-white
                  w-full
                  placeholder:text-gray-500
                "
              />

              {/* CTRL + K */}

              <span
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                  border
                  border-black/10
                  dark:border-white/10
                  px-2
                  py-1
                  rounded-lg
                  whitespace-nowrap
                "
              >
                Ctrl K
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-3
            relative
          "
        >

          {/* THEME TOGGLE */}

          <button

            onClick={toggleTheme}

            className="
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              p-3
              rounded-2xl
              text-xl
              text-black
              dark:text-white
              hover:bg-black/10
              dark:hover:bg-white/10
              transition
              backdrop-blur-md
            "
          >

            {

              theme === "dark"

                ? <FiSun />

                : <FiMoon />
            }

          </button>

          {/* NOTIFICATION BUTTON */}

          <button

            onClick={() =>

              setOpenNotifications(

                !openNotifications
              )
            }

            className="
              relative
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              p-3
              rounded-2xl
              hover:bg-black/10
              dark:hover:bg-white/10
              transition
              backdrop-blur-md
              text-black
              dark:text-white
            "
          >

            <FiBell
              className="
                text-xl
              "
            />

            {/* NOTIFICATION BADGE */}

            <span
              className="
                absolute
                top-2
                right-2
                w-2
                h-2
                bg-[#b9ff66]
                rounded-full
                animate-pulse
              "
            />

          </button>

          {/* PROFILE */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              rounded-2xl
              px-3
              py-2
              backdrop-blur-md
            "
          >

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"

              className="
                w-10
                h-10
                rounded-full
                border-2
                border-[#b9ff66]
              "
            />

            <div className="hidden lg:block">

              <h3
                className="
                  text-sm
                  font-semibold
                  text-black
                  dark:text-white
                "
              >
                Treesa George
              </h3>

              <p
                className="
                  text-xs
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Frontend Developer
              </p>

            </div>

          </div>

          {/* NOTIFICATIONS DROPDOWN */}

          <NotificationsDropdown

            open={openNotifications}

          />

        </div>

      </div>

    </header>
  );
}

export default Topbar;