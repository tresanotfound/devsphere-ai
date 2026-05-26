function ChatSidebar() {

  const chats = [
    'Frontend Team',
    'Backend Team',
    'AI Workspace',
    'Project Updates',
  ];

  return (
    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-6
        h-[700px]
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Chats
      </h2>

      <div className="space-y-4">

        {chats.map((chat, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              rounded-xl
              p-4
              text-gray-300
              cursor-pointer
              hover:bg-gray-700
              transition-all
            "
          >
            {chat}
          </div>

        ))}

      </div>

    </div>
  );
}

export default ChatSidebar;