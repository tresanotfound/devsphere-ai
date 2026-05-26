function StatsCard({
  title,
  value,
}) {

  return (
    <div
      className="
        bg-gray-900
        p-6
        rounded-2xl
        border
        border-gray-800
      "
    >

      <p className="text-gray-400">
        {title}
      </p>

      <h2
        className="
          text-4xl
          font-bold
          text-[#b9ff66]
          mt-4
        "
      >
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;