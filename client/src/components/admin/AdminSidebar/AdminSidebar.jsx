function AdminSidebar() {

  const items = [
    'Dashboard',
    'Users',
    'Reports',
    'Analytics',
    'Logs',
  ];

  return (

    <div
      className="
        bg-gray-900
        h-full
        p-6
        rounded-2xl
        border
        border-gray-800
      "
    >

      <h2
        className="
          text-3xl
          font-bold
          text-[#b9ff66]
          mb-10
        "
      >
        Admin Panel
      </h2>

      <div className="space-y-5">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              bg-gray-800
              p-4
              rounded-xl
              text-gray-300
              cursor-pointer
              hover:bg-[#b9ff66]
              hover:text-black
              transition-all
            "
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminSidebar;