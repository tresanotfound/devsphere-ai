// client/src/components/chat/OnlineUsers/OnlineUsers.jsx

function OnlineUsers({

  conversations,

  onlineUsers,

  onSelectUser,

}) {

  // FILTER ONLINE USERS

  const activeUsers =
    conversations.filter(

      (conversation) =>

        onlineUsers.includes(

          conversation.user._id
        )
    );



  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-6
      "
    >

      {/* HEADER */}

      <div className="mb-6">

        <h2
          className="
            text-3xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Online Users 🟢
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Team members currently active
        </p>

      </div>



      {/* EMPTY */}

      {

        activeUsers.length === 0

        && (

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
              No users online 🚀
            </p>

          </div>
        )
      }



      {/* USERS */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {

          activeUsers.map(

            (conversation) => {

              const user =
                conversation.user;



              return (

                <button

                  key={user._id}

                  onClick={() =>

                    onSelectUser(
                      conversation
                    )
                  }

                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    bg-black/5
                    dark:bg-white/5
                    border
                    border-black/10
                    dark:border-white/10
                    hover:bg-[#b9ff66]/10
                    transition
                  "
                >

                  {/* AVATAR */}

                  <div className="relative">

                    <img

                      src={
                        user.avatar
                        ||
                        `https://ui-avatars.com/api/?name=${user.name}`
                      }

                      alt={user.name}

                      className="
                        w-14
                        h-14
                        rounded-full
                        border-2
                        border-[#b9ff66]
                      "
                    />

                    {/* ONLINE DOT */}

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        w-4
                        h-4
                        rounded-full
                        bg-green-500
                        border-2
                        border-black
                      "
                    />

                  </div>



                  {/* INFO */}

                  <div
                    className="
                      text-left
                    "
                  >

                    <h3
                      className="
                        font-bold
                        text-black
                        dark:text-white
                      "
                    >
                      {user.name}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-green-500
                      "
                    >
                      Online now
                    </p>

                  </div>

                </button>
              );
            })
        }

      </div>

    </div>
  );
}

export default OnlineUsers;