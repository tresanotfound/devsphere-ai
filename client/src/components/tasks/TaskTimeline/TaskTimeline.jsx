function TaskTimeline() {

  const timeline = [
    'Task Created',
    'Assigned To Developer',
    'In Progress',
    'Completed',
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
        Task Timeline
      </h2>

      <div className="space-y-5">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                w-4
                h-4
                rounded-full
                bg-[#b9ff66]
              "
            />

            <p className="text-gray-300">
              {item}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TaskTimeline;