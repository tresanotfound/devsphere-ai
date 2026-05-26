function PieChart() {

  const data = [
    {
      label: 'Frontend',
      value: '40%',
    },

    {
      label: 'Backend',
      value: '35%',
    },

    {
      label: 'AI',
      value: '25%',
    },
  ];

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
        Team Distribution
      </h2>

      <div className="space-y-4">

        {data.map((item, index) => (

          <div
            key={index}
            className="
              flex
              justify-between
              bg-gray-800
              p-4
              rounded-xl
            "
          >

            <span className="text-gray-300">
              {item.label}
            </span>

            <span className="text-[#b9ff66]">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PieChart;