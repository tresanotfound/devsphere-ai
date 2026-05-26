function SystemLogs() {

  const logs = [
    'User login detected',
    'Project created successfully',
    'AI request generated',
    'Admin updated workspace settings',
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
        System Logs
      </h2>

      <div className="space-y-5">

        {logs.map((log, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-4
              rounded-xl
              text-gray-300
            "
          >
            {log}
          </div>

        ))}

      </div>

    </div>

  );
}

export default SystemLogs;