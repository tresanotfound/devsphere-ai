// client/src/components/notes/NotesEditor/NotesEditor.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FiSave,
  FiPlus,
} from "react-icons/fi";

function NotesEditor({

  onNoteCreated,
  selectedNote,
  onUpdateNote,

}) {

  const [title,
    setTitle] =
    useState("");

  const [content,
    setContent] =
    useState("");

  const [tags,
    setTags] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  // LOAD SELECTED NOTE

  useEffect(() => {

    if (selectedNote) {

      setTitle(
        selectedNote.title
      );

      setContent(
        selectedNote.content
      );

      setTags(

        selectedNote.tags
          ?.join(", ")
          || ""
      );

    }

  }, [selectedNote]);

  // SAVE NOTE

  const handleSave =
    async () => {

      try {

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const noteData = {

          title,
          content,

          tags: tags
            .split(",")
            .map((tag) =>
              tag.trim()
            ),

        };

        // UPDATE NOTE

        if (selectedNote) {

          const response =
            await axios.put(

              `\${import.meta.env.VITE_API_URL}/api/notes/${selectedNote._id}`,

              noteData,

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

        }

        // CREATE NOTE

        else {

          const response =
            await axios.post(

              `\${import.meta.env.VITE_API_URL}/api/notes`,

              noteData,

              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          onNoteCreated(
            response.data.note
          );
        }

        // RESET FORM

        if (!selectedNote) {

          setTitle("");
          setContent("");
          setTags("");
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
        glass-card
        p-8
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

        <h2
          className="
            text-3xl
            font-bold
            text-black
            dark:text-white
          "
        >

          {

            selectedNote

              ? "Edit Note ✏️"

              : "Create Note 📝"
          }

        </h2>

        <button

          onClick={handleSave}

          disabled={loading}

          className="
            flex
            items-center
            gap-2
            bg-[#b9ff66]
            hover:scale-105
            transition
            text-black
            px-5
            py-3
            rounded-2xl
            font-bold
          "
        >

          {

            selectedNote

              ? <FiSave />

              : <FiPlus />
          }

          {

            loading

              ? "Saving..."

              : selectedNote

                ? "Update"

                : "Create"
          }

        </button>

      </div>

      {/* TITLE */}

      <input

        type="text"

        placeholder="Note title..."

        value={title}

        onChange={(e) =>

          setTitle(
            e.target.value
          )
        }

        className="
          w-full
          p-4
          rounded-2xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/10
          dark:border-white/10
          outline-none
          text-black
          dark:text-white
          mb-5
        "
      />

      {/* TAGS */}

      <input

        type="text"

        placeholder="Tags (comma separated)"

        value={tags}

        onChange={(e) =>

          setTags(
            e.target.value
          )
        }

        className="
          w-full
          p-4
          rounded-2xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/10
          dark:border-white/10
          outline-none
          text-black
          dark:text-white
          mb-5
        "
      />

      {/* CONTENT */}

      <textarea

        rows="10"

        placeholder="Write markdown notes here..."

        value={content}

        onChange={(e) =>

          setContent(
            e.target.value
          )
        }

        className="
          w-full
          p-5
          rounded-3xl
          bg-black/5
          dark:bg-white/5
          border
          border-black/10
          dark:border-white/10
          outline-none
          text-black
          dark:text-white
          resize-none
        "
      />

    </div>
  );
}

export default NotesEditor;