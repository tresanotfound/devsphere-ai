function OnlineUsers() {

  const users = [
    'Treesa',
    'Alex',
    'Sophia',
    'Daniel',
  ];

  return (
    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-6
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
        Online Users
      </h2>

      <div className="space-y-4">

        {users.map((user, index) => (

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
                bg-green-500
              "
            />

            <p className="text-gray-300">
              {user}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default OnlineUsers;