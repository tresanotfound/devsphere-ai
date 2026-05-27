// client/src/components/chat/ChatSidebar/ChatSidebar.jsx

function ChatSidebar({

  conversations,

  selectedUser,

  onSelectUser,

  onlineUsers,

}) {

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-6
        overflow-y-auto
      "
    >

      {/* HEADER */}

      <div className="mb-8">

        <h2
          className="
            text-4xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Messages 💬
        </h2>

        <p
          className="
            mt-2
            text-gray-600
            dark:text-gray-400
          "
        >
          Team conversations
        </p>

      </div>



      {/* CONVERSATIONS */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {

          conversations.length === 0

          && (

            <div
              className="
                text-center
                py-16
              "
            >

              <p
                className="
                  text-gray-500
                "
              >
                No conversations yet 🚀
              </p>

            </div>
          )
        }



        {

          conversations.map(

            (conversation) => {

              const user =
                conversation.user;

              const isOnline =

                onlineUsers.includes(

                  user._id
                );

              const isSelected =

                selectedUser?._id
                === user._id;



              return (

                <button

                  key={user._id}

                  onClick={() =>

                    onSelectUser(
                      conversation
                    )
                  }

                  className={`
                    relative
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    transition
                    border

                    ${
                      isSelected

                        ? `
                          bg-[#b9ff66]/15
                          border-[#b9ff66]
                        `

                        : `
                          bg-black/5
                          dark:bg-white/5
                          border-black/10
                          dark:border-white/10
                        `
                    }
                  `}
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

                    {/* ONLINE */}

                    {

                      isOnline

                      && (

                        <span
                          className="
                            absolute
                            bottom-0
                            right-0
                            w-4
                            h-4
                            bg-green-500
                            rounded-full
                            border-2
                            border-black
                          "
                        />
                      )
                    }

                  </div>



                  {/* INFO */}

                  <div
                    className="
                      flex-1
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
                        text-gray-600
                        dark:text-gray-400
                        truncate
                        mt-1
                      "
                    >
                      {
                        conversation
                          .lastMessage
                          ?.message
                      }
                    </p>

                  </div>



                  {/* UNREAD */}

                  {

                    conversation.unread

                    && (

                      <div
                        className="
                          w-3
                          h-3
                          rounded-full
                          bg-[#b9ff66]
                        "
                      />
                    )
                  }

                </button>
              );
            })
        }

      </div>

    </div>
  );
}

export default ChatSidebar;