function ProjectMembers() {

  const members = [
    'Treesa',
    'Alex',
    'Sophia',
    'Daniel',
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
        Team Members
      </h2>

      <div className="space-y-4">

        {members.map((member, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              bg-gray-800
              p-4
              rounded-xl
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#b9ff66]
              "
            />

            <p className="text-white">
              {member}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectMembers;