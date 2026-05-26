function NotesSidebar() {

  const notes = [
    'React Architecture',
    'Redux Toolkit Guide',
    'AI Prompt Engineering',
    'MongoDB Notes',
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
        Notes
      </h2>

      <div className="space-y-4">

        {notes.map((note, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              rounded-xl
              p-4
              text-gray-300
              cursor-pointer
              hover:bg-gray-700
              transition-all
            "
          >
            {note}
          </div>

        ))}

      </div>

    </div>
  );
}

export default NotesSidebar;