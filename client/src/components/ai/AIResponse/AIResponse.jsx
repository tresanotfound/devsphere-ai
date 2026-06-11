
import jsPDF from "jspdf";

import ReactMarkdown from "react-markdown";

import {
  Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";

import {
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  FiCpu,
} from "react-icons/fi";

function AIResponse({

  response,

}) {
  const formattedResponse =
  response
    ?.replaceAll(
      "Project Overview",
      "# Project Overview"
    )

    ?.replaceAll(
      "Problem Statement",
      "# Problem Statement"
    )

    ?.replaceAll(
      "Target Users",
      "# Target Users"
    )

    ?.replaceAll(
      "Core Features",
      "# Core Features"
    )

    ?.replaceAll(
      "Advanced Features",
      "# Advanced Features"
    )

    ?.replaceAll(
      "Recommended Tech Stack",
      "# Recommended Tech Stack"
    )

    ?.replaceAll(
      "Frontend Architecture",
      "# Frontend Architecture"
    )

    ?.replaceAll(
      "Backend Architecture",
      "# Backend Architecture"
    )

    ?.replaceAll(
      "Database Design",
      "# Database Design"
    )

    ?.replaceAll(
      "Database Schema",
      "# Database Schema"
    )

    ?.replaceAll(
      "API Endpoints",
      "# API Endpoints"
    )

    ?.replaceAll(
      "Folder Structure",
      "# Folder Structure"
    )

    ?.replaceAll(
      "Development Roadmap",
      "# Development Roadmap"
    )

    ?.replaceAll(
      "Scalability Considerations",
      "# Scalability Considerations"
    )

    ?.replaceAll(
      "Security Considerations",
      "# Security Considerations"
    )

    ?.replaceAll(
      "Future Enhancements",
      "# Future Enhancements"
    );


  /* =========================================
     COPY RESPONSE
  ========================================= */

  const copyResponse = () => {

    navigator.clipboard.writeText(
      response
    );
  };

  /* =========================================
     DOWNLOAD PDF
  ========================================= */

  const downloadPDF = () => {

    const doc = new jsPDF();

    const splitText =
      doc.splitTextToSize(
        response,
        180
      );

    doc.text(
      splitText,
      10,
      10
    );

    doc.save(
      "devsphere-blueprint.pdf"
    );
  };

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-8
        min-h-[500px]
      "
    >

      {/* =========================================
         HEADER
      ========================================= */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
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
          <FiCpu />
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
            AI Response
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
              mt-1
            "
          >
            Intelligent workflow generation output.
          </p>

        </div>

      </div>

      {/* =========================================
         EMPTY STATE
      ========================================= */}

      {

        !response

        && (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-24
            "
          >

            <div
              className="
                w-28
                h-28
                rounded-full
                bg-[#b9ff66]/10
                flex
                items-center
                justify-center
                text-6xl
                mb-8
              "
            >
              🤖
            </div>

            <h3
              className="
                text-3xl
                font-bold
                text-black
                dark:text-white
              "
            >
              Awaiting AI Prompt
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-gray-600
                dark:text-gray-400
                text-lg
              "
            >
              Enter your project idea
              and DevSphere AI will
              generate an intelligent
              workflow plan instantly.
            </p>

          </div>
        )
      }

      {/* =========================================
         RESPONSE
      ========================================= */}

      {

        response

        && (

          <>

            {/* ACTION BUTTONS */}

            <div
              className="
                flex
                gap-4
                mb-6
                flex-wrap
              "
            >

              <button
                onClick={copyResponse}
                className="
                  px-5
                  py-3
                  rounded-xl
                  bg-[#b9ff66]
                  text-black
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Copy Response
              </button>

              <button
                onClick={downloadPDF}
                className="
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-[#b9ff66]
                  text-[#b9ff66]
                  font-semibold
                  hover:bg-[#b9ff66]
                  hover:text-black
                  transition
                "
              >
                Download PDF
              </button>

            </div>

            {/* MARKDOWN RESPONSE */}

            <div
              className="
prose
prose-invert
max-w-none

text-gray-300

prose-headings:text-white
prose-headings:font-extrabold
prose-headings:tracking-tight

prose-h1:text-5xl
prose-h1:text-[#b9ff66]
prose-h1:border-b
prose-h1:border-[#b9ff66]/30
prose-h1:pb-4
prose-h1:mb-10

prose-h2:text-4xl
prose-h2:text-[#b9ff66]
prose-h2:border-b
prose-h2:border-white/10
prose-h2:pb-3
prose-h2:mt-14
prose-h2:mb-6

prose-h3:text-2xl
prose-h3:text-white
prose-h3:mt-10
prose-h3:mb-4

prose-p:text-gray-300
prose-p:leading-8
prose-p:text-[17px]

prose-strong:text-[#b9ff66]
prose-strong:font-bold

prose-ul:list-disc
prose-ul:pl-6
prose-ul:space-y-2

prose-ol:pl-6

prose-li:text-gray-300
prose-li:marker:text-[#b9ff66]
prose-li:leading-7

prose-code:text-[#b9ff66]
prose-code:bg-black/30
prose-code:px-1
prose-code:py-0.5
prose-code:rounded

prose-pre:bg-[#111827]
prose-pre:border
prose-pre:border-white/10
prose-pre:rounded-2xl
prose-pre:p-5
prose-pre:overflow-x-auto

prose-blockquote:border-l-4
prose-blockquote:border-[#b9ff66]
prose-blockquote:pl-4
prose-blockquote:text-gray-400
"
            >

              <ReactMarkdown
                components={{

                  code({

                    inline,
                    className,
                    children,
                    ...props

                  }) {

                    const match =
                      /language-(\w+)/.exec(
                        className || ""
                      );

                    return !inline && match ? (

                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {
                          String(children)
                            .replace(/\n$/, "")
                        }
                      </SyntaxHighlighter>

                    ) : (

                      <code
                        className={className}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {formattedResponse}
              </ReactMarkdown>

            </div>

          </>
        )
      }

    </div>
  );
}

export default AIResponse;
