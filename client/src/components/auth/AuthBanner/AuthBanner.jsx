function AuthBanner() {

  return (
    <div
      className="
        hidden
        lg:flex
        flex-col
        justify-center
        flex-1
        bg-gradient-to-br
        from-[#b9ff66]
        to-green-400
        text-black
        p-20
      "
    >

      <h1
        className="
          text-6xl
          font-extrabold
          leading-tight
        "
      >
        Welcome To
        <br />
        DevSphere AI
      </h1>

      <p className="mt-8 text-xl max-w-lg">

        AI-powered productivity platform
        for developers and modern teams.

      </p>

    </div>
  );
}

export default AuthBanner;