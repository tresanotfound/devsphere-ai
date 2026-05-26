import Card from '../../common/Card/Card';

function Notifications() {

  const notifications = [
    'New login detected.',
    'Project updated successfully.',
    'AI summary generated.',
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
        Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((notification, index) => (

          <div
            key={index}
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-gray-300
            "
          >
            {notification}
          </div>

        ))}

      </div>

    </Card>
  );
}

export default Notifications;