import { useState } from "react";

import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";

import {
  FiSend,
  FiCpu,
} from "react-icons/fi";

function AIWorkspace() {

  const [prompt, setPrompt] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hello 👋 I'm DevSphere AI assistant. How can I help you today?",
    },
  ]);

  const handleSend = () => {

    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      text: prompt,
    };

    const aiMessage = {
      role: "assistant",
      text:
        "This is a demo AI response for: " + prompt,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setPrompt("");
  };

  return (

    <DashboardLayout>

      <div className="p-8 h-[calc(100vh-100px)] flex flex-col">

        {/* HEADER */}

        <div className="mb-8">

          <h1 className="text-6xl font-extrabold flex items-center gap-4">

            AI Workspace

            <FiCpu className="text-[#b9ff66]" />

          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Interact with your AI productivity assistant.
          </p>

        </div>

        {/* CHAT AREA */}

        <div
          className="
            flex-1
            overflow-y-auto
            glass-card
            rounded-3xl
            p-6
            space-y-5
            mb-6
          "
        >

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`
                  max-w-[75%]
                  px-5
                  py-4
                  rounded-2xl
                  text-sm
                  leading-relaxed
                  ${
                    msg.role === "user"
                      ? "bg-[#b9ff66] text-black"
                      : "bg-white/10 text-white"
                  }
                `}
              >
                {msg.text}
              </div>

            </div>

          ))}

        </div>

        {/* INPUT */}

        <div
          className="
            flex
            items-center
            gap-4
            glass-card
            p-4
            rounded-3xl
          "
        >

          <input
            type="text"
            placeholder="Ask DevSphere AI anything..."

            value={prompt}

            onChange={(e) =>
              setPrompt(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                handleSend();
              }
            }}

            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-500
              text-lg
            "
          />

          <button

            onClick={handleSend}

            className="
              bg-[#b9ff66]
              text-black
              p-4
              rounded-2xl
              hover:scale-105
              transition
            "
          >

            <FiSend className="text-xl" />

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AIWorkspace;