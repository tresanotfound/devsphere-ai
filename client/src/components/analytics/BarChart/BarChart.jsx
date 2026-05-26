function BarChart() {

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
        Tasks Completed
      </h2>

      <div className="space-y-5">

        {[70, 50, 90, 60].map((value, index) => (

          <div key={index}>

            <div className="flex justify-between mb-2">

              <span className="text-gray-400">
                Week {index + 1}
              </span>

              <span className="text-white">
                {value}%
              </span>

            </div>

            <div className="w-full bg-gray-800 rounded-full h-4">

              <div
                className="bg-[#b9ff66] h-4 rounded-full"
                style={{ width: `${value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BarChart;