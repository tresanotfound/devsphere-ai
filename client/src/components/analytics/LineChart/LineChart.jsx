function LineChart() {

  const values = [20, 40, 70, 50, 90];

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
        Productivity Trend
      </h2>

      <div className="flex items-end gap-4 h-52">

        {values.map((value, index) => (

          <div
            key={index}
            className="
              flex-1
              bg-[#b9ff66]
              rounded-t-xl
            "
            style={{
              height: `${value}%`,
            }}
          />

        ))}

      </div>

    </div>
  );
}

export default LineChart;