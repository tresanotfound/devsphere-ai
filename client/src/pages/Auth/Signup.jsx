import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

import {
  FcGoogle,
} from "react-icons/fc";

import {
  FaGithub,
} from "react-icons/fa";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
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
          right-[-200px]
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
          left-[-200px]
          w-[500px]
          h-[500px]
          bg-purple-500
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

        {/* TITLE */}

        <div className="mb-10 text-center">

          <h1
            className="
              text-5xl
              font-extrabold
              text-white
            "
          >
            Create Account
          </h1>

          <p
            className="
              text-gray-400
              mt-4
              text-lg
            "
          >
            Start your DevSphere AI journey.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}

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

            <FiUser className="text-xl text-[#b9ff66]" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
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

          {/* CREATE ACCOUNT BUTTON */}

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

            Create Account

            <FiArrowRight className="text-xl" />

          </button>

        </form>

        {/* DIVIDER */}

        <div
          className="
            flex
            items-center
            gap-4
            my-8
          "
        >

          <div className="flex-1 h-[1px] bg-white/10" />

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-white/10" />

        </div>

        {/* GOOGLE BUTTON */}

        <button
          className="
            w-full
            flex
            items-center
            justify-center
            gap-4
            bg-white/5
            border
            border-white/10
            py-4
            rounded-2xl
            hover:bg-white/10
            transition-all
            duration-300
            font-semibold
            mb-4
          "
        >

          <FcGoogle className="text-2xl" />

          Continue with Google

        </button>

        {/* GITHUB BUTTON */}

        <button
          className="
            w-full
            flex
            items-center
            justify-center
            gap-4
            bg-white/5
            border
            border-white/10
            py-4
            rounded-2xl
            hover:bg-white/10
            transition-all
            duration-300
            font-semibold
          "
        >

          <FaGithub className="text-2xl" />

          Continue with GitHub

        </button>

        {/* FOOTER */}

        <p
          className="
            text-center
            text-gray-400
            mt-8
          "
        >

          Already have an account?{" "}

          <Link
            to="/login"
            className="
              text-[#b9ff66]
              font-semibold
              hover:underline
            "
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Signup;