import { useState } from "react";

import { motion } from "framer-motion";

import DashboardLayout
from "../layout/DashboardLayout/DashboardLayout";

import AIPromptInput
from "./AIPromptInput/AIPromptInput";

import AIResponse
from "./AIResponse/AIResponse";

import AISuggestions
from "./AISuggestions/AISuggestions";

import AIHistory
from "./AIHistory/AIHistory";

import CodeGenerator
from "./CodeGenerator/CodeGenerator";

function AIWorkspace() {

  /* =========================================
     STATES
  ========================================= */

  const [prompt, setPrompt] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [history, setHistory] =
    useState([]);

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* =========================================
           HEADER
        ========================================= */}

        <motion.div

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.4,
          }}

          className="
            glass-card
            rounded-3xl
            p-8
            border
            border-white/10
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-6
              flex-wrap
            "
          >

            <div>

              <h1
                className="
                  text-5xl
                  font-extrabold
                  text-black
                  dark:text-white
                  tracking-tight
                "
              >
                AI Workspace 🤖
              </h1>

              <p
                className="
                  mt-4
                  text-lg
                  text-gray-600
                  dark:text-gray-400
                  max-w-2xl
                  leading-8
                "
              >
                Your intelligent AI-powered
                development workspace for
                generating blueprints,
                scalable architectures,
                enterprise workflows,
                and production-ready code.
              </p>

            </div>

            {/* STATUS */}

            <div
              className="
                px-5
                py-3
                rounded-2xl
                bg-[#b9ff66]/10
                border
                border-[#b9ff66]/20
                text-[#b9ff66]
                font-semibold
                text-sm
                h-fit
              "
            >
              ● AI ONLINE
            </div>

          </div>

        </motion.div>

        {/* =========================================
           MAIN GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-4
            gap-8
          "
        >

          {/* =========================================
             LEFT PANEL
          ========================================= */}

          <div
            className="
              xl:col-span-3
              space-y-8
            "
          >

            {/* =========================================
               AI PROMPT INPUT
            ========================================= */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
              }}
            >

              <AIPromptInput

                prompt={prompt}

                setPrompt={setPrompt}

                setResponse={setResponse}

                history={history}

                setHistory={setHistory}
              />

            </motion.div>

            {/* =========================================
               AI RESPONSE
            ========================================= */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
              }}
            >

              <AIResponse
                response={response}
              />

            </motion.div>

            {/* =========================================
               CODE GENERATOR
            ========================================= */}

            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
              }}

              className="
                glass-card
                rounded-3xl
                p-8
                border
                border-white/10
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                  flex-wrap
                  gap-4
                "
              >

                <div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-black
                      dark:text-white
                    "
                  >
                    💻 AI Code Generator
                  </h2>

                  <p
                    className="
                      mt-2
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    Generate production-ready
                    frontend and backend code instantly.
                  </p>

                </div>

                <div
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-black/5
                    dark:bg-white/5
                    border
                    border-black/10
                    dark:border-white/10
                    text-sm
                    font-medium
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Powered by AI
                </div>

              </div>

              <CodeGenerator />

            </motion.div>

          </div>

          {/* =========================================
             RIGHT PANEL
          ========================================= */}

          <div className="space-y-8">

            <motion.div

              initial={{
                opacity: 0,
                x: 20,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.5,
              }}
            >

              <AISuggestions />

            </motion.div>

            <motion.div

              initial={{
                opacity: 0,
                x: 20,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.6,
              }}
            >

              <AIHistory
  history={history}
  setHistory={setHistory}
  setResponse={setResponse}
/>

            </motion.div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AIWorkspace;

