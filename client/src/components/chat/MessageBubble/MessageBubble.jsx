// client/src/components/chat/MessageBubble/MessageBubble.jsx

function MessageBubble({

  message,

  isOwn,

}) {

  return (

    <div
      className={`
        flex
        ${

          isOwn

            ? "justify-end"

            : "justify-start"
        }
      `}
    >

      <div
        className={`
          max-w-[75%]
          px-5
          py-4
          rounded-3xl
          backdrop-blur-md
          border
          transition

          ${

            isOwn

              ? `
                bg-[#b9ff66]
                text-black
                border-[#b9ff66]
                rounded-br-md
              `

              : `
                bg-black/5
                dark:bg-white/5
                text-black
                dark:text-white
                border-black/10
                dark:border-white/10
                rounded-bl-md
              `
          }
        `}
      >

        {/* MESSAGE */}

        <p
          className="
            text-sm
            md:text-base
            leading-relaxed
            break-words
          "
        >
          {message.message}
        </p>



        {/* FOOTER */}

        <div
          className={`
            flex
            items-center
            justify-between
            gap-4
            mt-3

            ${

              isOwn

                ? "text-black/70"

                : "text-gray-500"
            }
          `}
        >

          {/* TIME */}

          <span
            className="
              text-xs
            "
          >

            {

              message.createdAt

                ? new Date(

                    message.createdAt
                  ).toLocaleTimeString(

                    [],

                    {

                      hour:
                        "2-digit",

                      minute:
                        "2-digit",
                    }
                  )

                : "Now"
            }

          </span>



          {/* READ STATUS */}

          {

            isOwn

            && (

              <span
                className="
                  text-xs
                  font-medium
                "
              >

                {

                  message.read

                    ? "Seen"

                    : "Sent"
                }

              </span>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default MessageBubble;