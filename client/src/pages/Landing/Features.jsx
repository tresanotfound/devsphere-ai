function Features() {

  const features = [
    'AI Workspace',
    'Task Management',
    'Realtime Collaboration',
    'Analytics Dashboard',
    'Project Management',
  ];

  return (

    <div
      className="
        min-h-screen
        bg-[#0f172a]
        text-white
        p-10
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          mb-10
        "
      >
        Features ✨
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {features.map((feature, index) => (

          <div
            key={index}
            className="
              bg-gray-900
              border
              border-gray-800
              p-6
              rounded-2xl
            "
          >
            {feature}
          </div>

        ))}

      </div>

    </div>

  );
}

export default Features;