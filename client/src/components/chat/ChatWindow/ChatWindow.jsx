import MessageBubble from '../MessageBubble/MessageBubble';
import TypingIndicator from '../TypingIndicator/TypingIndicator';
import EmojiPicker from '../EmojiPicker/EmojiPicker';

function ChatWindow() {

  const messages = [
    {
      sender: 'Treesa',
      message: 'Hey team 👋',
      isOwnMessage: true,
    },

    {
      sender: 'Alex',
      message: 'Dashboard UI looks amazing!',
      isOwnMessage: false,
    },
  ];

  return (
    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-6
        flex
        flex-col
        h-[700px]
      "
    >

      {/* Header */}

      <h2
        className="
          text-3xl
          font-bold
          text-white
          mb-6
        "
      >
        Team Chat
      </h2>

      {/* Messages */}

      <div className="flex-1 space-y-5 overflow-y-auto">

        {messages.map((msg, index) => (

          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
            isOwnMessage={msg.isOwnMessage}
          />

        ))}

      </div>

      {/* Typing */}

      <div className="mt-4">

        <TypingIndicator />

      </div>

      {/* Input */}

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Type message..."
          className="
            flex-1
            px-5
            py-4
            rounded-xl
            bg-gray-800
            text-white
            border
            border-gray-700
            focus:outline-none
            focus:border-[#b9ff66]
          "
        />

        <EmojiPicker />

      </div>

    </div>
  );
}

export default ChatWindow;