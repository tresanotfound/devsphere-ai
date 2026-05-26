function ReportsManagement() {

  const reports = [
    'Spam detected in chat',
    'Project violation reported',
    'AI misuse alert',
  ];

  return (

    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-6
      "
    >

      <h2
        className="
          text-3xl
          font-bold
          text-white
          mb-8
        "
      >
        Reports Management
      </h2>

      <div className="space-y-5">

        {reports.map((report, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-5
              rounded-xl
              flex
              justify-between
              items-center
            "
          >

            <p className="text-gray-300">
              {report}
            </p>

            <button
              className="
                px-4
                py-2
                rounded-lg
                bg-red-500
                text-white
                font-semibold
              "
            >
              Review
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default ReportsManagement;