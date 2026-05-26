import { Link } from 'react-router-dom';

function Home() {

  return (

    <div
      className="
        min-h-screen
        bg-[#0f172a]
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
      "
    >

      <h1
        className="
          text-7xl
          font-extrabold
          text-white
        "
      >
        DevSphere AI 🚀
      </h1>

      <p
        className="
          text-gray-400
          mt-6
          text-2xl
          max-w-2xl
        "
      >
        AI-powered productivity platform
        for developers and modern teams.
      </p>

      <Link to="/dashboard">

        <button
          className="
            mt-12
            bg-[#b9ff66]
            text-black
            font-bold
            px-10
            py-5
            rounded-2xl
            text-xl
            hover:scale-105
            transition
          "
        >
          Get Started
        </button>

      </Link>

    </div>
  );
}

export default Home;