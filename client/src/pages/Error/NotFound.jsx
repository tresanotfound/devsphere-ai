function NotFound() {

  return (

    <div
      className="
        min-h-screen
        bg-[#0f172a]
        flex
        flex-col
        justify-center
        items-center
        text-white
      "
    >

      <h1
        className="
          text-8xl
          font-extrabold
        "
      >
        404
      </h1>

      <p className="text-gray-400 mt-5 text-xl">
        Page not found.
      </p>

    </div>

  );
}

export default NotFound;