import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import NotesEditor from '../../components/notes/NotesEditor/NotesEditor';

import NotesSidebar from '../../components/notes/NotesSidebar/NotesSidebar';

function NotesPage() {

  return (

    <DashboardLayout>

      <div className="mb-10">

        <h1
          className="
            text-5xl
            font-bold
            text-white
          "
        >
          Notes Workspace 📝
        </h1>

      </div>

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
        "
      >

        <NotesSidebar />

        <div className="xl:col-span-2">

          <NotesEditor />

        </div>

      </div>

    </DashboardLayout>

  );
}

export default NotesPage;