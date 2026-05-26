function AIHistory() {

  const history = [
    'Generate React dashboard UI',
    'Explain Redux Toolkit',
    'Create Express API structure',
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
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        AI History
      </h2>

      <div className="space-y-4">

        {history.map((item, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              rounded-xl
              p-4
              text-gray-300
            "
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default AIHistory;