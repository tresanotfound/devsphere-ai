import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

import NotesGenerator from '../../components/ai/NotesGenerator/NotesGenerator';

function NotesAssistant() {

  return (

    <DashboardLayout>

      <h1
        className="
          text-5xl
          font-bold
          text-white
          mb-10
        "
      >
        AI Notes Assistant 📝
      </h1>

      <NotesGenerator />

    </DashboardLayout>

  );
}

export default NotesAssistant;