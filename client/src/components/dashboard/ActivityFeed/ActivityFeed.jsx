import Card from '../../common/Card/Card';

function ActivityFeed() {

  const activities = [
    'Alex completed UI dashboard design.',
    'Sophia uploaded project assets.',
    'New AI analysis generated.',
  ];

  return (
    <Card>

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-gray-300
            "
          >
            {activity}
          </div>

        ))}

      </div>

    </Card>
  );
}

export default ActivityFeed;