import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

function Pricing() {

  const plans = [
    {
      title: 'Starter',
      price: '$0',
    },
    {
      title: 'Pro',
      price: '$29',
    },
    {
      title: 'Enterprise',
      price: '$99',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#111827]">

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
          Pricing Plans
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {plans.map((plan, index) => (

            <Card key={index}>

              <h3
                className="
                  text-2xl
                  text-white
                  font-bold
                "
              >
                {plan.title}
              </h3>

              <p
                className="
                  text-5xl
                  text-[#b9ff66]
                  font-bold
                  mt-6
                "
              >
                {plan.price}
              </p>

              <Button className="mt-8 w-full">
                Choose Plan
              </Button>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;