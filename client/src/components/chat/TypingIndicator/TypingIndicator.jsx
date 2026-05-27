// client/src/components/chat/TypingIndicator/TypingIndicator.jsx

function TypingIndicator() {

  return (

    <div
      className="
        flex
        justify-start
      "
    >

      <div
        className="
          px-5
          py-4
          rounded-3xl
          rounded-bl-md
          bg-black/5
          dark:bg-white/5
          border
          border-black/10
          dark:border-white/10
          backdrop-blur-md
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          {/* DOT 1 */}

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#b9ff66]
              animate-bounce
            "
          />

          {/* DOT 2 */}

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#b9ff66]
              animate-bounce
              [animation-delay:0.15s]
            "
          />

          {/* DOT 3 */}

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#b9ff66]
              animate-bounce
              [animation-delay:0.3s]
            "
          />

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;