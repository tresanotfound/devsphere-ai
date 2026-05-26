import Card from '../../common/Card/Card';

function Testimonials() {

  const testimonials = [
    {
      name: 'Sophia',
      role: 'Frontend Engineer',
      feedback:
        'DevSphere AI completely transformed our workflow.',
    },
    {
      name: 'Alex',
      role: 'Backend Developer',
      feedback:
        'The best AI productivity tool I have ever used.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-4xl
            text-center
            font-bold
            text-white
            mb-16
          "
        >
          Loved By Developers
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {testimonials.map((item, index) => (

            <Card key={index}>

              <p className="text-gray-300">
                "{item.feedback}"
              </p>

              <div className="mt-6">

                <h3 className="text-white font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;