function AIShowcase() {

  return (
    <section className="py-24 px-6 bg-[#111827]">

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
        "
      >

        <div>

          <h2
            className="
              text-5xl
              font-bold
              text-white
            "
          >
            AI That Understands Developers
          </h2>

          <p className="text-gray-400 mt-6 text-lg">

            DevSphere AI helps generate
            documentation, code snippets,
            project insights, and productivity
            recommendations instantly.

          </p>

        </div>

        <div
          className="
            h-[400px]
            rounded-3xl
            bg-gradient-to-br
            from-[#b9ff66]
            to-green-400
          "
        />

      </div>

    </section>
  );
}

export default AIShowcase;