function ServerError() {

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

      <h1 className="text-6xl font-bold">
        Server Error ⚠️
      </h1>

      <p className="text-gray-400 mt-5">
        Something went wrong.
      </p>

    </div>

  );
}

export default ServerError;