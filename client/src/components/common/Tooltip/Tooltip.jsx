function Tooltip({ text, children }) {
  return (
    <div className="relative group inline-block">

      {children}

      <div
        className="
          absolute
          bottom-full
          left-1/2
          -translate-x-1/2
          mb-2
          hidden
          group-hover:block
          bg-black
          text-white
          text-sm
          px-3
          py-1
          rounded-lg
          whitespace-nowrap
        "
      >
        {text}
      </div>

    </div>
  );
}

export default Tooltip;