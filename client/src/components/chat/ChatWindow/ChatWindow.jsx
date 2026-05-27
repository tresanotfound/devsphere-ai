// client/src/components/chat/ChatWindow/ChatWindow.jsx

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiSend,
} from "react-icons/fi";

import MessageBubble
from "../MessageBubble/MessageBubble";

import TypingIndicator
from "../TypingIndicator/TypingIndicator";

function ChatWindow({

  selectedUser,

  messages,

  onSendMessage,

  currentUser,

  onlineUsers,

}) {

  const [
    text,
    setText,
  ] = useState("");

  const [
    typing,
    setTyping,
  ] = useState(false);

  const messagesEndRef =
    useRef(null);



  /* =========================================
     AUTO SCROLL
  ========================================= */

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior:
          "smooth",
      });

  }, [messages]);



  /* =========================================
     SEND MESSAGE
  ========================================= */

  const handleSubmit =
    (e) => {

      e.preventDefault();

      if (!text.trim())
        return;

      onSendMessage(text);

      setText("");
    };



  /* =========================================
     ONLINE STATUS
  ========================================= */

  const isOnline =

    selectedUser

    &&

    onlineUsers.includes(
      selectedUser._id
    );



  /* =========================================
     EMPTY STATE
  ========================================= */

  if (!selectedUser) {

    return (

      <div
        className="
          glass-card
          rounded-3xl
          flex
          flex-col
          items-center
          justify-center
          h-full
          text-center
          p-10
        "
      >

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-[#b9ff66]/20
            flex
            items-center
            justify-center
            text-6xl
            mb-6
          "
        >
          💬
        </div>

        <h2
          className="
            text-4xl
            font-extrabold
            text-black
            dark:text-white
          "
        >
          Select a Conversation
        </h2>

        <p
          className="
            mt-4
            text-gray-600
            dark:text-gray-400
            max-w-lg
          "
        >
          Start collaborating with
          your team in realtime 🚀
        </p>

      </div>
    );
  }



  return (

    <div
      className="
        glass-card
        rounded-3xl
        flex
        flex-col
        h-full
        overflow-hidden
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          p-6
          border-b
          border-black/10
          dark:border-white/10
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* AVATAR */}

          <div className="relative">

            <img

              src={
                selectedUser.avatar
                ||
                `https://ui-avatars.com/api/?name=${selectedUser.name}`
              }

              alt={selectedUser.name}

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
                    rounded-full
                    bg-green-500
                    border-2
                    border-black
                  "
                />
              )
            }

          </div>



          {/* INFO */}

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-black
                dark:text-white
              "
            >
              {selectedUser.name}
            </h2>

            <p
              className="
                text-sm
                text-gray-600
                dark:text-gray-400
              "
            >

              {

                isOnline

                  ? "Online"

                  : "Offline"
              }

            </p>

          </div>

        </div>

      </div>



      {/* MESSAGES */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-6
          space-y-4
        "
      >

        {

          messages.length === 0

          && (

            <div
              className="
                h-full
                flex
                items-center
                justify-center
              "
            >

              <p
                className="
                  text-gray-500
                "
              >
                No messages yet 🚀
              </p>

            </div>
          )
        }



        {

          messages.map(

            (message, index) => (

              <MessageBubble

                key={
                  message._id
                  || index
                }

                message={message}

                isOwn={

                  message.sender?._id
                  === currentUser._id

                  ||

                  message.sender
                  === currentUser._id
                }
              />
            ))
        }



        {/* TYPING */}

        {

          typing

          && <TypingIndicator />
        }



        <div ref={messagesEndRef} />

      </div>



      {/* INPUT */}

      <form

        onSubmit={handleSubmit}

        className="
          p-6
          border-t
          border-black/10
          dark:border-white/10
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* INPUT */}

          <input

            type="text"

            value={text}

            onChange={(e) =>

              setText(
                e.target.value
              )
            }

            placeholder="Type your message..."

            className="
              glass-input
              flex-1
            "
          />



          {/* SEND BUTTON */}

          <button

            type="submit"

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
              hover:scale-105
              transition
            "
          >

            <FiSend />

          </button>

        </div>

      </form>

    </div>
  );
}

export default ChatWindow;