import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/dashboard");
  };

  return (

    <div
      className="
        min-h-screen
        bg-[#020817]
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          bg-[#b9ff66]
          opacity-20
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-cyan-500
          opacity-20
          blur-[140px]
          rounded-full
        "
      />

      {/* CARD */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.6,
        }}

        className="
          relative
          z-10
          w-full
          max-w-md
          bg-white/5
          border
          border-white/10
          backdrop-blur-2xl
          rounded-[32px]
          p-10
          shadow-2xl
        "
      >

        {/* LOGO */}

        <div className="mb-10 text-center">

          <h1
            className="
              text-5xl
              font-extrabold
              tracking-tight
            "
          >
            DevSphere AI
          </h1>

          <p
            className="
              text-gray-400
              mt-4
              text-lg
            "
          >
            Welcome back to your AI workspace.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* EMAIL */}

          <div
            className="
              flex
              items-center
              gap-4
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
            "
          >

            <FiMail className="text-xl text-[#b9ff66]" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required

              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-gray-500
              "
            />

          </div>

          {/* PASSWORD */}

          <div
            className="
              flex
              items-center
              gap-4
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
            "
          >

            <FiLock className="text-xl text-[#b9ff66]" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required

              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-gray-500
              "
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"

            className="
              w-full
              bg-gradient-to-r
              from-[#b9ff66]
              to-[#7cf29a]
              text-black
              py-4
              rounded-2xl
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-3
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >

            Login

            <FiArrowRight className="text-xl" />

          </button>

        </form>

        {/* FOOTER */}

        <p
          className="
            text-center
            text-gray-400
            mt-8
          "
        >

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="
              text-[#b9ff66]
              font-semibold
              hover:underline
            "
          >
            Sign Up
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;