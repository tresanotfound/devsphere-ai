// client/src/components/notes/NotesToolbar/NotesToolbar.jsx

import {
  FiSearch,
  FiPlus,
  FiStar,
} from "react-icons/fi";

function NotesToolbar({

  search,
  setSearch,

}) {

  return (

    <div
      className="
        glass-card
        p-5
        rounded-3xl
        flex
        flex-col
        md:flex-row
        items-start
        md:items-center
        justify-between
        gap-5
      "
    >

      {/* SEARCH BAR */}

      <div
        className="
          flex
          items-center
          gap-3
          w-full
          md:max-w-xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/10
          dark:border-white/10
          rounded-2xl
          px-5
          py-4
        "
      >

        <FiSearch
          className="
            text-gray-500
            text-xl
          "
        />

        <input

          type="text"

          placeholder="Search notes..."

          value={search}

          onChange={(e) =>

            setSearch(
              e.target.value
            )
          }

          className="
            bg-transparent
            outline-none
            w-full
            text-black
            dark:text-white
            placeholder:text-gray-500
          "
        />

      </div>

      {/* ACTIONS */}

      <div
        className="
          flex
          items-center
          gap-3
          w-full
          md:w-auto
        "
      >

        {/* QUICK NOTE */}

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-semibold
            hover:scale-105
            transition
            whitespace-nowrap
          "
        >

          <FiPlus />

          New Note

        </button>

        {/* PINNED FILTER */}

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            border
            border-black/10
            dark:border-white/10
            text-black
            dark:text-white
            hover:bg-[#b9ff66]/10
            transition
            whitespace-nowrap
          "
        >

          <FiStar />

          Pinned

        </button>

      </div>

    </div>
  );
}

export default NotesToolbar;