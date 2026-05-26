import Card from '../../common/Card/Card';

function FeaturesSection() {

  const features = [
    {
      title: 'AI Workspace',
      description:
        'Generate code, notes, and insights instantly.',
    },
    {
      title: 'Realtime Collaboration',
      description:
        'Chat and work with your team live.',
    },
    {
      title: 'Advanced Analytics',
      description:
        'Track productivity and project growth.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-4xl
            font-bold
            text-white
            text-center
            mb-16
          "
        >
          Powerful Features
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {features.map((feature, index) => (

            <Card key={index}>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#b9ff66]
                "
              >
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {feature.description}
              </p>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;