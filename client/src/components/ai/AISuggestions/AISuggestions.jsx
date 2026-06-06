import {
  FiZap,
  FiTrendingUp,
  FiCheckSquare,
  FiBookOpen,
} from "react-icons/fi";

function AISuggestions() {

  const suggestions = [

    {
      icon: <FiCheckSquare />,
      title: "Generate Tasks",
      description:
        "Create project workflows instantly.",
    },

    {
      icon: <FiBookOpen />,
      title: "Summarize Notes",
      description:
        "Extract key points and actions.",
    },

    {
      icon: <FiTrendingUp />,
      title: "Productivity Insights",
      description:
        "Analyze team performance.",
    },

    {
      icon: <FiZap />,
      title: "AI Recommendations",
      description:
        "Receive smart workspace suggestions.",
    },
  ];

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-6
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-black
          dark:text-white
          mb-6
        "
      >
        AI Features ⚡
      </h2>

      <div className="space-y-4">

        {

          suggestions.map(

            (item, index) => (

              <div

                key={index}

                className="
                  p-4
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-2
                  "
                >

                  <div
                    className="
                      text-[#b9ff66]
                      text-xl
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                      font-semibold
                      text-black
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                </div>

                <p
                  className="
                    text-sm
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {item.description}
                </p>

              </div>
            ))
        }

      </div>

    </div>
  );
}

export default AISuggestions;