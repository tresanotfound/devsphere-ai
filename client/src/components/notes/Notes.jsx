// client/src/components/notes/Notes.jsx

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import NotesEditor
from "./NotesEditor/NotesEditor";

import NotesCard
from "./NotesCard/NotesCard";

import NotesSidebar
from "./NotesSidebar/NotesSidebar";

import NotesToolbar
from "./NotesToolbar/NotesToolbar";

function Notes() {

  const [notes, setNotes] =
    useState([]);

  const [selectedNote,
    setSelectedNote] =
    useState(null);

  const [search,
    setSearch] =
    useState("");

  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState("");

  // FETCH NOTES

  const fetchNotes = async () => {

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.get(

          "http://localhost:5000/api/notes",

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setNotes(
        response.data.notes
      );

    } catch (error) {

      console.error(error);

      setError(
        "Failed to load notes"
      );

    } finally {

      setLoading(false);
    }
  };

  // LOAD NOTES

  useEffect(() => {

    fetchNotes();

  }, []);

  // CREATE NOTE

  const handleNoteCreated =
    (newNote) => {

      setNotes((prev) => [

        newNote,
        ...prev,

      ]);
    };

  // UPDATE NOTE

  const handleUpdateNote =
    (updatedNote) => {

      setNotes((prev) =>

        prev.map((note) =>

          note._id ===
          updatedNote._id

            ? updatedNote

            : note
        )
      );
    };

  // DELETE NOTE

  const handleDeleteNote =
    async (noteId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `http://localhost:5000/api/notes/${noteId}`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        setNotes((prev) =>

          prev.filter(

            (note) =>
              note._id !== noteId
          )
        );

      } catch (error) {

        console.error(error);
      }
    };

  // FILTERED NOTES

  const filteredNotes =
    notes.filter((note) =>

      note.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      note.content
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <DashboardLayout>

      {/* PAGE HEADER */}

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Notes Workspace 📝
        </h1>

        <p
          className="
            mt-3
            text-lg
            text-gray-600
            dark:text-gray-400
          "
        >
          Organize ideas, AI notes,
          documentation and productivity.
        </p>

      </div>

      {/* TOOLBAR */}

      <NotesToolbar

        search={search}

        setSearch={setSearch}

      />

      {/* MAIN GRID */}

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-4
          gap-8
          mt-8
        "
      >

        {/* SIDEBAR */}

        <div className="xl:col-span-1">

          <NotesSidebar

            notes={notes}

            selectedNote={
              selectedNote
            }

            setSelectedNote={
              setSelectedNote
            }

          />

        </div>

        {/* MAIN CONTENT */}

        <div className="xl:col-span-3">

          {/* EDITOR */}

          <NotesEditor

            onNoteCreated={
              handleNoteCreated
            }

            selectedNote={
              selectedNote
            }

            onUpdateNote={
              handleUpdateNote
            }

          />

          {/* LOADING */}

          {

            loading && (

              <div
                className="
                  text-center
                  py-16
                  text-xl
                  text-gray-500
                "
              >
                Loading notes...
              </div>
            )
          }

          {/* ERROR */}

          {

            error && (

              <div
                className="
                  mt-6
                  p-4
                  rounded-2xl
                  bg-red-500/10
                  border
                  border-red-500/20
                  text-red-500
                "
              >
                {error}
              </div>
            )
          }

          {/* NOTES GRID */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              mt-8
            "
          >

            {

              filteredNotes.map(

                (note) => (

                  <NotesCard

                    key={note._id}

                    note={note}

                    onDelete={
                      handleDeleteNote
                    }

                    setSelectedNote={
                      setSelectedNote
                    }

                    onUpdateNote={
                      handleUpdateNote
                    }

                  />
                ))
            }

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Notes;