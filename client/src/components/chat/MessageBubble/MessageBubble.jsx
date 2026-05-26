function MessageBubble({
  message,
  sender,
  isOwnMessage,
}) {

  return (
    <div
      className={`
        flex
        ${isOwnMessage
          ? 'justify-end'
          : 'justify-start'}
      `}
    >

      <div
        className={`
          max-w-md
          px-5
          py-4
          rounded-2xl
          ${
            isOwnMessage
              ? 'bg-[#b9ff66] text-black'
              : 'bg-gray-800 text-white'
          }
        `}
      >

        <p className="font-semibold mb-2">
          {sender}
        </p>

        <p>
          {message}
        </p>

      </div>

    </div>
  );
}

export default MessageBubble;