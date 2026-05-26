function Badge({ text }) {
  return (
    <span
      className="
        px-3
        py-1
        rounded-full
        bg-[#b9ff66]
        text-black
        text-sm
        font-semibold
      "
    >
      {text}
    </span>
  );
}

export default Badge;