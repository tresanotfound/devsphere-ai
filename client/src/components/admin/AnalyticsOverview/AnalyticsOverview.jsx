function AnalyticsOverview() {

  const stats = [
    {
      title: 'Total Users',
      value: '1,204',
    },

    {
      title: 'Active Projects',
      value: '312',
    },

    {
      title: 'AI Requests',
      value: '18K',
    },
  ];

  return (

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      "
    >

      {stats.map((stat, index) => (

        <div
          key={index}
          className="
            bg-gray-900
            rounded-2xl
            border
            border-gray-800
            p-6
          "
        >

          <p className="text-gray-400">
            {stat.title}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-[#b9ff66]
              mt-4
            "
          >
            {stat.value}
          </h2>

        </div>

      ))}

    </div>

  );
}

export default AnalyticsOverview;