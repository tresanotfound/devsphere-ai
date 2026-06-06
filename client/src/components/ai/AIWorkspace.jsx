import { useState } from "react";
import { motion } from "framer-motion";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import AIPromptInput from "./AIPromptInput/AIPromptInput";
import AIResponse from "./AIResponse/AIResponse";
import AISuggestions from "./AISuggestions/AISuggestions";
import AIHistory from "./AIHistory/AIHistory";
import CodeGenerator from "./CodeGenerator/CodeGenerator";

function AIWorkspace() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            glass-card
            rounded-3xl
            p-8
          "
        >
          <h1
            className="
              text-5xl
              font-extrabold
              text-black
              dark:text-white
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
            "
          >
            Your intelligent productivity assistant.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-4
            gap-8
          "
        >

          {/* LEFT PANEL */}

          <div
            className="
              xl:col-span-3
              space-y-8
            "
          >

            {/* AI TASK GENERATOR */}

            <AIPromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              setResponse={setResponse}
              history={history}
              setHistory={setHistory}
            />

            {/* AI TASK RESPONSE */}

            <AIResponse
              response={response}
            />

            {/* AI CODE GENERATOR */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                glass-card
                rounded-3xl
                p-8
              "
            >
              <h2
                className="
                  text-3xl
                  font-bold
                  mb-6
                  text-black
                  dark:text-white
                "
              >
                💻 AI Code Generator
              </h2>

              <CodeGenerator />
            </motion.div>

          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-8">

            <AISuggestions />

            <AIHistory
              history={history}
            />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AIWorkspace;