// client/src/components/notes/NotesSidebar/NotesSidebar.jsx

function NotesSidebar({

  notes,
  selectedNote,
  setSelectedNote,

}) {

  // PINNED NOTES FIRST

  const pinnedNotes =
    (notes || []).filter(

      (note) => note.pinned
    );

  const regularNotes =
    (notes || []).filter(

      (note) => !note.pinned
    );

  return (

    <div
      className="
        glass-card
        p-6
        rounded-3xl
        h-fit
        sticky
        top-24
      "
    >

      {/* TITLE */}

      <h2
        className="
          text-2xl
          font-bold
          text-black
          dark:text-white
          mb-6
        "
      >
        Notes Library 📚
      </h2>

      {/* PINNED NOTES */}

      {

        pinnedNotes.length > 0 && (

          <div className="mb-8">

            <h3
              className="
                text-sm
                uppercase
                tracking-widest
                text-[#b9ff66]
                mb-4
              "
            >
              Pinned Notes
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >

              {

                pinnedNotes.map(

                  (note) => (

                    <button

                      key={note._id}

                      onClick={() =>

                        setSelectedNote(
                          note
                        )
                      }

                      className={`
                        text-left
                        p-4
                        rounded-2xl
                        transition
                        border

                        ${
                          selectedNote?._id
                          === note._id

                            ? `
                              bg-[#b9ff66]/20
                              border-[#b9ff66]
                            `

                            : `
                              bg-black/5
                              dark:bg-white/5
                              border-black/10
                              dark:border-white/10
                              hover:bg-[#b9ff66]/10
                            `
                        }
                      `}
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <h4
                          className="
                            font-semibold
                            text-black
                            dark:text-white
                            truncate
                          "
                        >
                          {note.title}
                        </h4>

                        <span>
                          📌
                        </span>

                      </div>

                    </button>
                  ))
              }

            </div>

          </div>
        )
      }

      {/* ALL NOTES */}

      <div>

        <h3
          className="
            text-sm
            uppercase
            tracking-widest
            text-gray-500
            dark:text-gray-400
            mb-4
          "
        >
          All Notes
        </h3>

        <div
          className="
            flex
            flex-col
            gap-3
            max-h-[500px]
            overflow-y-auto
            pr-2
          "
        >

          {

            regularNotes.map(

              (note) => (

                <button

                  key={note._id}

                  onClick={() =>

                    setSelectedNote(
                      note
                    )
                  }

                  className={`
                    text-left
                    p-4
                    rounded-2xl
                    transition
                    border

                    ${
                      selectedNote?._id
                      === note._id

                        ? `
                          bg-[#b9ff66]/20
                          border-[#b9ff66]
                        `

                        : `
                          bg-black/5
                          dark:bg-white/5
                          border-black/10
                          dark:border-white/10
                          hover:bg-black/10
                          dark:hover:bg-white/10
                        `
                    }
                  `}
                >

                  {/* NOTE TITLE */}

                  <h4
                    className="
                      font-semibold
                      text-black
                      dark:text-white
                      truncate
                    "
                  >
                    {note.title}
                  </h4>

                  {/* DATE */}

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                  >

                    {

                      new Date(
                        note.updatedAt
                      ).toLocaleDateString()
                    }

                  </p>

                </button>
              ))
          }

        </div>

      </div>

    </div>
  );
}

export default NotesSidebar;