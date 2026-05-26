function NotesEditor() {

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
          mb-6
        "
      >
        Notes Editor
      </h2>

      <textarea
        placeholder="Start writing your notes..."
        className="
          w-full
          h-[400px]
          bg-gray-800
          rounded-xl
          p-5
          text-white
          resize-none
          border
          border-gray-700
          focus:outline-none
          focus:border-[#b9ff66]
        "
      />

    </div>
  );
}

export default NotesEditor;