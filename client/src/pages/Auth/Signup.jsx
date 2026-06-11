import {
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  useAuth,
} from "../../context/AuthContext";

function Signup() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [formData,
    setFormData] = useState({

      name: "",
      email: "",
      password: "",

    });

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  // HANDLE SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        setError("");

        const { data } =
          await axios.post(

            `${import.meta.env.VITE_API_URL}/api/auth/register`,

            formData

          );

        login(
          data.user,
          data.token
        );

        navigate("/dashboard");

      } catch (error) {

        setError(
          error.response?.data?.message ||
          "Signup failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#020617]
        text-white
        px-6
      "
    >

      <form
        onSubmit={handleSubmit}

        className="
          w-full
          max-w-md
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-10
        "
      >

        <h1
          className="
            text-5xl
            font-extrabold
            mb-3
          "
        >
          Create Account
        </h1>

        <p
          className="
            text-gray-400
            mb-8
          "
        >
          Start your DevSphere journey.
        </p>

        {/* ERROR */}
        {error && (

          <div
            className="
              bg-red-500/20
              border
              border-red-500
              text-red-300
              p-3
              rounded-xl
              mb-5
            "
          >
            {error}
          </div>

        )}

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}

          className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            outline-none
            mb-5
          "

          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}

          className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            outline-none
            mb-5
          "

          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}

          className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            outline-none
            mb-6
          "

          required
        />

        {/* BUTTON */}
        <button
          type="submit"

          disabled={loading}

          className="
            w-full
            bg-[#b9ff66]
            text-black
            font-bold
            py-4
            rounded-2xl
            hover:scale-[1.02]
            transition
          "
        >

          {

            loading

              ? "Creating..."

              : "Create Account"

          }

        </button>

        <p
          className="
            text-gray-400
            mt-6
            text-center
          "
        >

          Already have an account?

          <Link
            to="/login"

            className="
              text-[#b9ff66]
              ml-2
              font-semibold
            "
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Signup;