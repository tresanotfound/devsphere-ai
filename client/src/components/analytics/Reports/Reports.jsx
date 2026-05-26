function Reports() {

  const reports = [
    'Weekly Productivity Report',
    'AI Usage Analytics',
    'Project Completion Report',
  ];

  return (
    <div
      className="
        bg-gray-900
        p-6
        rounded-2xl
        border
        border-gray-800
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Reports
      </h2>

      <div className="space-y-4">

        {reports.map((report, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-4
              rounded-xl
              text-gray-300
            "
          >
            {report}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Reports;