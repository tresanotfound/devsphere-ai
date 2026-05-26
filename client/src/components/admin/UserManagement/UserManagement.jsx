function UserManagement() {

  const users = [
    {
      name: 'Treesa',
      role: 'Admin',
    },

    {
      name: 'Alex',
      role: 'Developer',
    },

    {
      name: 'Sophia',
      role: 'Designer',
    },
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
          text-3xl
          font-bold
          text-white
          mb-8
        "
      >
        User Management
      </h2>

      <div className="space-y-5">

        {users.map((user, index) => (

          <div
            key={index}
            className="
              flex
              justify-between
              items-center
              bg-gray-800
              p-5
              rounded-xl
            "
          >

            <div>

              <h3 className="text-white font-bold">
                {user.name}
              </h3>

              <p className="text-gray-400">
                {user.role}
              </p>

            </div>

            <button
              className="
                px-5
                py-2
                rounded-xl
                bg-[#b9ff66]
                text-black
                font-bold
              "
            >
              Manage
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default UserManagement;