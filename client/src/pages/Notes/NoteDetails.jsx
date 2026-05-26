import DashboardLayout from '../../components/layout/DashboardLayout/DashboardLayout';

function NoteDetails() {

  return (

    <DashboardLayout>

      <div
        className="
          bg-gray-900
          border
          border-gray-800
          rounded-2xl
          p-8
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          React Architecture Notes
        </h1>

        <p className="text-gray-400 mt-5">
          Notes details and markdown preview appear here.
        </p>

      </div>

    </DashboardLayout>

  );
}

export default NoteDetails;