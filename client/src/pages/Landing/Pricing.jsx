function Pricing() {

  const plans = [
    {
      name: 'Starter',
      price: '$0',
    },

    {
      name: 'Pro',
      price: '$29',
    },

    {
      name: 'Enterprise',
      price: '$99',
    },
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

      <h1 className="text-5xl font-bold mb-10">
        Pricing 💰
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {plans.map((plan, index) => (

          <div
            key={index}
            className="
              bg-gray-900
              border
              border-gray-800
              rounded-2xl
              p-8
            "
          >

            <h2 className="text-3xl font-bold">
              {plan.name}
            </h2>

            <p
              className="
                text-[#b9ff66]
                text-5xl
                mt-6
              "
            >
              {plan.price}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Pricing;