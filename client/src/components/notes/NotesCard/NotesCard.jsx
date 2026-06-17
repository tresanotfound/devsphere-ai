// client/src/components/notes/NotesCard/NotesCard.jsx

import axios from "axios";

import {
  FiTrash2,
  FiEdit,
  FiPaperclip,
} from "react-icons/fi";

function NotesCard({

  note,
  onDelete,
  setSelectedNote,
  onUpdateNote,

}) {

  // TOGGLE PIN

  const handleTogglePin =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.patch(

            `\${import.meta.env.VITE_API_URL}/api/notes/${note._id}/pin`,

            {},

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        onUpdateNote(
          response.data.note
        );

      } catch (error) {

        console.error(error);
      }
    };

  return (

    <div
      className="
        glass-card
        p-6
        rounded-3xl
        hover:scale-[1.02]
        transition
        relative
        overflow-hidden
      "
    >

      {/* PIN BADGE */}

      {

        note.pinned && (

          <div
            className="
              absolute
              top-4
              right-4
              text-[#b9ff66]
              text-xl
            "
          >
            📌
          </div>
        )
      }

      {/* TITLE */}

      <h2
        className="
          text-2xl
          font-bold
          text-black
          dark:text-white
          mb-3
          pr-10
        "
      >
        {note.title}
      </h2>

      {/* CONTENT PREVIEW */}

      <p
        className="
          text-gray-700
          dark:text-gray-300
          leading-relaxed
          line-clamp-4
          mb-5
        "
      >

        {

          note.content.length > 180

            ? `${note.content.slice(0, 180)}...`

            : note.content
        }

      </p>

      {/* TAGS */}

      <div
        className="
          flex
          flex-wrap
          gap-2
          mb-5
        "
      >

        {

          note.tags?.map(

            (tag, index) => (

              <span

                key={index}

                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-[#b9ff66]/20
                  text-[#7ed321]
                  border
                  border-[#b9ff66]/20
                "
              >
                #{tag}
              </span>
            ))
        }

      </div>

      {/* FOOTER */}

      <div
        className="
          flex
          items-center
          justify-between
          mt-6
        "
      >

        {/* DATE */}

        <div
          className="
            text-xs
            text-gray-500
          "
        >

          {

            new Date(
              note.updatedAt
            ).toLocaleDateString()
          }

        </div>

        {/* ACTIONS */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* PIN */}

          <button

            onClick={handleTogglePin}

            className="
              p-2
              rounded-xl
              bg-black/5
              dark:bg-white/5
              hover:bg-[#b9ff66]/20
              transition
            "
          >
            <FiPaperclip />
          </button>

          {/* EDIT */}

          <button

            onClick={() =>

              setSelectedNote(
                note
              )
            }

            className="
              p-2
              rounded-xl
              bg-black/5
              dark:bg-white/5
              hover:bg-blue-500/20
              transition
            "
          >
            <FiEdit />
          </button>

          {/* DELETE */}

          <button

            onClick={() =>

              onDelete(
                note._id
              )
            }

            className="
              p-2
              rounded-xl
              bg-black/5
              dark:bg-white/5
              hover:bg-red-500/20
              transition
              text-red-500
            "
          >
            <FiTrash2 />
          </button>

        </div>

      </div>

    </div>
  );
}

export default NotesCard;