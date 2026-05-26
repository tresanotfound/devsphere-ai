function TaskComments() {

  const comments = [
    'Great progress on the dashboard!',
    'Need backend integration next.',
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
        Comments
      </h2>

      <div className="space-y-4">

        {comments.map((comment, index) => (

          <div
            key={index}
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-gray-300
            "
          >
            {comment}
          </div>

        ))}

      </div>

    </div>
  );
}

export default TaskComments;