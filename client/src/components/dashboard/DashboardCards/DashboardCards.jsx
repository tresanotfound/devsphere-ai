import Card from '../../common/Card/Card';

function DashboardCards() {

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
    },
    {
      title: 'Pending Tasks',
      value: '38',
    },
    {
      title: 'Team Members',
      value: '8',
    },
    {
      title: 'AI Requests',
      value: '124',
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      {stats.map((item, index) => (

        <Card key={index}>

          <h3 className="text-gray-400">
            {item.title}
          </h3>

          <h2
            className="
              text-4xl
              font-bold
              text-[#b9ff66]
              mt-4
            "
          >
            {item.value}
          </h2>

        </Card>

      ))}

    </div>
  );
}

export default DashboardCards;