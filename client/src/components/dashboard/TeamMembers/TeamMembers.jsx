import Card from '../../common/Card/Card';

function TeamMembers() {

  const members = [
    'Treesa',
    'Alex',
    'Sophia',
    'Daniel',
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
              p-4
              bg-gray-800
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

    </Card>
  );
}

export default TeamMembers;