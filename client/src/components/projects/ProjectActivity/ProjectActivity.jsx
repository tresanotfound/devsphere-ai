function ProjectActivity() {

  const activities = [
    'Alex updated analytics module.',
    'Sophia uploaded UI assets.',
    'New sprint created.',
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
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-4
              rounded-xl
              text-gray-300
            "
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectActivity;