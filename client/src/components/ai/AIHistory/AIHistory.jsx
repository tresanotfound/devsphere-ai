function AIHistory({

  history,

}) {

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
        AI History 🧠
      </h2>

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
                        mt-2
                        text-gray-500
                      "
                    >

                      {

                        new Date(

                          item.createdAt
                        ).toLocaleString()
                      }

                    </p>

                  </div>
                ))
            }

          </div>
        )
      }

    </div>
  );
}

export default AIHistory;