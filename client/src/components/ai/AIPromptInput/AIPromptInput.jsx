import { useState } from "react";
import axios from "axios";

import {
  FiSend,
  FiZap,
} from "react-icons/fi";

function AIPromptInput({

  prompt,
  setPrompt,
  setResponse,
  history,
  setHistory,

}) {

  const [loading, setLoading] =
    useState(false);

  const generateAIResponse =
    async () => {

      if (!prompt.trim())
        return;

      try {

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.post(

            "http://localhost:5000/api/ai/generate-tasks",

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

        const aiResponse =
          res.data.response;

        setResponse(
          aiResponse
        );

        setHistory([

          {
            prompt,

            response:
              aiResponse,

            createdAt:
              new Date(),
          },

          ...history,
        ]);

      } catch (error) {

        console.error(
          "AI ERROR:",
          error
        );

        setResponse(
          `❌ AI Error

${error.response?.data?.message || error.message}`
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
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
          mb-6
        "
      >

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-[#b9ff66]
            text-black
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FiZap />
        </div>

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-black
              dark:text-white
            "
          >
            AI Blueprint Generator
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
              mt-1
            "
          >
            Generate complete project architecture using AI.
          </p>

        </div>

      </div>

      <div className="space-y-6">

        <textarea

          value={prompt}

          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }

          placeholder="
Build AI Interview Platform

Create Ecommerce SaaS

Design Hostel Management System
"

          rows={6}

          className="
            w-full
            rounded-3xl
            p-6
            bg-black/5
            dark:bg-white/5
            border
            border-black/10
            dark:border-white/10
            outline-none
            resize-none
            text-black
            dark:text-white
          "
        />

        <button

          onClick={
            generateAIResponse
          }

          disabled={
            loading
          }

          className="
            w-full
            py-4
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-bold
            text-lg
            flex
            items-center
            justify-center
            gap-3
            hover:scale-[1.01]
            transition
          "
        >

          {
            loading

              ? "Generating Blueprint..."

              : (
                <>
                  <FiSend />
                  Generate AI Blueprint
                </>
              )
          }

        </button>

      </div>

    </div>
  );
}

export default AIPromptInput;