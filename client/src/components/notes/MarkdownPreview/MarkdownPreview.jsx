function MarkdownPreview() {

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
        Markdown Preview
      </h2>

      <div className="text-gray-300 leading-relaxed">

        <h1 className="text-4xl font-bold text-white">
          DevSphere Notes
        </h1>

        <p className="mt-4">
          Markdown preview content appears here.
        </p>

      </div>

    </div>
  );
}

export default MarkdownPreview;