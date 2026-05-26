function AISuggestions() {

  const suggestions = [
    'Optimize dashboard performance',
    'Use Redux Toolkit for state management',
    'Implement JWT authentication',
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
        AI Suggestions
      </h2>

      <div className="space-y-4">

        {suggestions.map((suggestion, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              rounded-xl
              p-4
              text-gray-300
            "
          >
            {suggestion}
          </div>

        ))}

      </div>

    </div>
  );
}

export default AISuggestions;