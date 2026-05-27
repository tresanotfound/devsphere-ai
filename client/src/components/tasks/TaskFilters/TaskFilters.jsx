// client/src/components/tasks/TaskFilters/TaskFilters.jsx

import {
  FiSearch,
  FiFilter,
} from "react-icons/fi";

function TaskFilters({

  filters,
  setFilters,

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
          gap-3
          mb-6
        "
      >

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-[#b9ff66]
            text-black
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FiFilter />
        </div>

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-black
              dark:text-white
            "
          >
            Task Filters
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
            "
          >
            Search and filter tasks.
          </p>

        </div>

      </div>

      {/* FILTER GRID */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        "
      >

        {/* SEARCH */}

        <div
          className="
            relative
          "
        >

          <FiSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-500
              text-lg
            "
          />

          <input
            type="text"

            value={filters.search}

            onChange={(e) =>

              setFilters({

                ...filters,
                search:
                  e.target.value,
              })
            }

            placeholder="Search tasks..."

            className="
              w-full
              pl-12
              pr-5
              py-4
              rounded-2xl
              bg-black/5
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              outline-none
              text-black
              dark:text-white
              placeholder:text-gray-500
            "
          />

        </div>

        {/* STATUS */}

        <select

          value={filters.status}

          onChange={(e) =>

            setFilters({

              ...filters,
              status:
                e.target.value,
            })
          }

          className="
            w-full
            px-5
            py-4
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            border
            border-black/10
            dark:border-white/10
            outline-none
            text-black
            dark:text-white
          "
        >

          <option value="all">
            All Status
          </option>

          <option value="todo">
            To Do
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="completed">
            Completed
          </option>

        </select>

        {/* PRIORITY */}

        <select

          value={filters.priority}

          onChange={(e) =>

            setFilters({

              ...filters,
              priority:
                e.target.value,
            })
          }

          className="
            w-full
            px-5
            py-4
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            border
            border-black/10
            dark:border-white/10
            outline-none
            text-black
            dark:text-white
          "
        >

          <option value="all">
            All Priority
          </option>

          <option value="low">
            Low Priority
          </option>

          <option value="medium">
            Medium Priority
          </option>

          <option value="high">
            High Priority
          </option>

        </select>

      </div>

    </div>
  );
}

export default TaskFilters;