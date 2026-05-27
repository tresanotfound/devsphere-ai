// client/src/components/notes/MarkdownPreview/MarkdownPreview.jsx

import ReactMarkdown
from "react-markdown";

function MarkdownPreview({

  content,

}) {

  return (

    <div
      className="
        glass-card
        p-8
        rounded-3xl
        overflow-hidden
      "
    >

      {/* HEADER */}

      <div className="mb-6">

        <h2
          className="
            text-3xl
            font-bold
            text-black
            dark:text-white
          "
        >
          Markdown Preview 👀
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Live rendered markdown notes.
        </p>

      </div>

      {/* MARKDOWN */}

      <div
        className="
          prose
          prose-lg
          dark:prose-invert
          max-w-none
          break-words
        "
      >

        <ReactMarkdown>

          {

            content ||

            `
# Welcome to DevSphere Notes 🚀

You can write markdown here.

## Features

- Rich notes
- Markdown rendering
- AI summaries
- Productivity workspace

### Example Code

\`\`\`js
console.log("DevSphere AI");
\`\`\`
            `
          }

        </ReactMarkdown>

      </div>

    </div>
  );
}

export default MarkdownPreview;