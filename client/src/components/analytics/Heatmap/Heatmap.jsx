function Heatmap() {

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

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Activity Heatmap
      </h2>

      <div className="grid grid-cols-7 gap-3">

        {Array.from({ length: 35 }).map((_, index) => (

          <div
            key={index}
            className="
              w-10
              h-10
              rounded-lg
              bg-[#b9ff66]
              opacity-70
            "
          />

        ))}

      </div>

    </div>
  );
}

export default Heatmap;