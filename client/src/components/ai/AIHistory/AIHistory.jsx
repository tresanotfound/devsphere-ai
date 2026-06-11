import { useEffect } from "react";

import axios from "axios";

function AIHistory({

  history,
  setHistory,
  setResponse,

}) {

  /* =========================================
     FETCH AI HISTORY
  ========================================= */

  useEffect(() => {

    const fetchHistory =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(

              "http://localhost:5000/api/ai/history",

              {
                headers: {

                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          setHistory(
            res.data.history
          );

        } catch (error) {

          console.error(
            "HISTORY ERROR:",
            error
          );
        }
      };

    fetchHistory();

  }, []);

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-6
      "
    >

      {/* =========================================
         HEADER
      ========================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-black
            dark:text-white
          "
        >
          AI History 🧠
        </h2>

        <div
          className="
            text-xs
            px-3
            py-1
            rounded-full
            bg-[#b9ff66]/10
            text-[#b9ff66]
            border
            border-[#b9ff66]/20
          "
        >
          Persistent
        </div>

      </div>

      {/* =========================================
         EMPTY STATE
      ========================================= */}

      {

        history.length === 0

          ? (

            <div
              className="
                text-center
                py-10
              "
            >

              <p
                className="
                  text-gray-500
                "
              >
                No AI activity yet.
              </p>

            </div>
          )

          : (

            <div className="space-y-4">

              {

                history.map(

                  (item) => (

                    <button

                      key={item._id}

                      onClick={() =>
                        setResponse(
                          item.response
                        )
                      }

                      className="
                        w-full
                        text-left
                        p-4
                        rounded-2xl
                        bg-black/5
                        dark:bg-white/5
                        border
                        border-black/10
                        dark:border-white/10
                        hover:border-[#b9ff66]/40
                        hover:bg-[#b9ff66]/5
                        transition-all
                        duration-300
                      "
                    >

                      <h3
                        className="
                          font-semibold
                          text-black
                          dark:text-white
                          line-clamp-2
                        "
                      >
                        {item.prompt}
                      </h3>

                      <p
                        className="
                          text-xs
                          mt-3
                          text-gray-500
                        "
                      >

                        {

                          new Date(

                            item.createdAt
                          ).toLocaleString()
                        }

                      </p>

                    </button>
                  ))
              }

            </div>
          )
      }

    </div>
  );
}

export default AIHistory;