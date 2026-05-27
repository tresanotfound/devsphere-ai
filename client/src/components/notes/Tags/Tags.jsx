// client/src/components/notes/Tags/Tags.jsx

function Tags({

  notes,
  selectedTag,
  setSelectedTag,

}) {

  // EXTRACT UNIQUE TAGS

  const allTags = [

    ...new Set(

      notes.flatMap(

        (note) => note.tags || []
      )
    ),
  ];

  return (

    <div
      className="
        glass-card
        p-6
        rounded-3xl
      "
    >

      {/* HEADER */}

      <div className="mb-5">

        <h2
          className="
            text-2xl
            font-bold
            text-black
            dark:text-white
          "
        >
          Tags 🏷️
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Organize and filter notes.
        </p>

      </div>

      {/* TAGS */}

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {/* ALL TAG */}

        <button

          onClick={() =>

            setSelectedTag(null)
          }

          className={`
            px-4
            py-2
            rounded-2xl
            transition
            font-medium

            ${
              !selectedTag

                ? `
                  bg-[#b9ff66]
                  text-black
                `

                : `
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                  text-black
                  dark:text-white
                `
            }
          `}
        >
          All
        </button>

        {/* DYNAMIC TAGS */}

        {

          allTags.map((tag) => (

            <button

              key={tag}

              onClick={() =>

                setSelectedTag(tag)
              }

              className={`
                px-4
                py-2
                rounded-2xl
                transition
                font-medium

                ${
                  selectedTag === tag

                    ? `
                      bg-[#b9ff66]
                      text-black
                    `

                    : `
                      bg-black/5
                      dark:bg-white/5
                      border
                      border-black/10
                      dark:border-white/10
                      text-black
                      dark:text-white
                      hover:bg-[#b9ff66]/10
                    `
                }
              `}
            >
              #{tag}
            </button>
          ))
        }

      </div>

    </div>
  );
}

export default Tags;