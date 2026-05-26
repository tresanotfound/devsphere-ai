function Unauthorized() {

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
        Unauthorized 🚫
      </h1>

      <p className="text-gray-400 mt-5">
        You do not have access to this page.
      </p>

    </div>

  );
}

export default Unauthorized;