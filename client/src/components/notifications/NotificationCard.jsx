// client/src/components/notifications/NotificationCard.jsx

function NotificationCard({

  notification,

  onMarkAsRead,

  onDelete,

}) {

  return (

    <div
      className={`
        relative
        p-5
        rounded-3xl
        border
        transition
        backdrop-blur-md

        ${

          notification.read

            ? `
              bg-black/5
              dark:bg-white/5
              border-black/10
              dark:border-white/10
            `

            : `
              bg-[#b9ff66]/10
              border-[#b9ff66]
            `
        }
      `}
    >

      {/* UNREAD DOT */}

      {

        !notification.read

        && (

          <span
            className="
              absolute
              top-4
              right-4
              w-3
              h-3
              rounded-full
              bg-[#b9ff66]
              animate-pulse
            "
          />
        )
      }



      {/* TOP */}

      <div
        className="
          flex
          items-start
          gap-4
        "
      >

        {/* AVATAR */}

        <img

          src={
            notification.sender?.avatar
            ||
            `https://ui-avatars.com/api/?name=${notification.sender?.name || "User"}`
          }

          alt="sender"

          className="
            w-14
            h-14
            rounded-full
            border-2
            border-[#b9ff66]
          "
        />



        {/* CONTENT */}

        <div className="flex-1">

          {/* TITLE */}

          <h3
            className="
              text-lg
              font-bold
              text-black
              dark:text-white
            "
          >
            {notification.title}
          </h3>



          {/* MESSAGE */}

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-gray-600
              dark:text-gray-400
            "
          >
            {notification.message}
          </p>



          {/* TYPE */}

          <div className="mt-4">

            <span
              className="
                px-3
                py-1
                rounded-xl
                text-xs
                font-semibold
                capitalize
                bg-[#b9ff66]/20
                text-[#b9ff66]
              "
            >
              {notification.type}
            </span>

          </div>



          {/* FOOTER */}

          <div
            className="
              flex
              items-center
              justify-between
              mt-5
            "
          >

            {/* TIME */}

            <p
              className="
                text-xs
                text-gray-500
              "
            >

              {

                new Date(

                  notification.createdAt
                ).toLocaleString()
              }

            </p>



            {/* ACTIONS */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              {/* MARK READ */}

              {

                !notification.read

                && (

                  <button

                    onClick={() =>

                      onMarkAsRead(

                        notification._id
                      )
                    }

                    className="
                      text-xs
                      px-3
                      py-1.5
                      rounded-xl
                      bg-[#b9ff66]
                      text-black
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    Mark Read
                  </button>
                )
              }



              {/* DELETE */}

              <button

                onClick={() =>

                  onDelete(
                    notification._id
                  )
                }

                className="
                  text-xs
                  px-3
                  py-1.5
                  rounded-xl
                  border
                  border-red-500/30
                  text-red-500
                  hover:bg-red-500/10
                  transition
                "
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NotificationCard;