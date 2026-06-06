import {
  useState,
} from "react";

import axios from "axios";

function CodeGenerator() {

  const [
    prompt,
    setPrompt,
  ] = useState("");

  const [
    code,
    setCode,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleGenerate =
    async () => {

      try {

        if (!prompt.trim()) {

          alert(
            "Please enter a prompt"
          );

          return;
        }

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.post(

            "http://localhost:5000/api/ai/generate-code",

            {
              prompt,
            },

            {
              headers: {

                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setCode(
          res.data.code
        );

      } catch (error) {

        console.error(error);

        setCode(
          "Failed to generate code."
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-8
        space-y-6
      "
    >

      <h2
        className="
          text-4xl
          font-bold
          text-white
        "
      >
        💻 AI Code Generator
      </h2>

      <p
        className="
          text-gray-400
        "
      >
        Generate React, Redux,
        Express, JWT, MongoDB,
        Socket.io and more.
      </p>

      <textarea
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="Generate Login Component..."
        className="
          w-full
          h-36
          rounded-2xl
          bg-slate-900
          text-white
          border
          border-slate-700
          p-4
          outline-none
          resize-none
        "
      />

      <button
        onClick={
          handleGenerate
        }
        disabled={loading}
        className="
          px-5
          py-3
          rounded-xl
          bg-lime-400
          text-black
          font-bold
          hover:scale-105
          transition
          disabled:opacity-50
        "
      >

        {loading
          ? "Generating..."
          : "Generate Code"}

      </button>

      {code && (

        <div
          className="
            bg-black
            rounded-2xl
            p-4
            overflow-auto
            border
            border-slate-700
          "
        >

          <pre
            className="
              text-green-400
              whitespace-pre-wrap
              text-sm
            "
          >
            {code}
          </pre>

        </div>

      )}

    </div>
  );
}

export default CodeGenerator;