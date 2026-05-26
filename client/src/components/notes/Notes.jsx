import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import NotesSidebar from "./NotesSidebar/NotesSidebar";
import NotesEditor from "./NotesEditor/NotesEditor";
import MarkdownPreview from "./MarkdownPreview/MarkdownPreview";

function Notes() {
  return (
    <DashboardLayout>

      <div className="flex h-[85vh]">

        <NotesSidebar />

        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2">

          <NotesEditor />

          <MarkdownPreview />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Notes;