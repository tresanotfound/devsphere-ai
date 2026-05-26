function ProjectFiles() {

  const files = [
    'dashboard-ui.fig',
    'backend-api-docs.pdf',
    'analytics-report.xlsx',
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
        Project Files
      </h2>

      <div className="space-y-4">

        {files.map((file, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-4
              rounded-xl
              text-gray-300
            "
          >
            {file}
          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectFiles;