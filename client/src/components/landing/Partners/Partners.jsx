function Partners() {

  const partners = [
    'Google',
    'Microsoft',
    'OpenAI',
    'GitHub',
  ];

  return (
    <section className="py-16 px-6 bg-[#0f172a]">

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-wrap
          justify-center
          gap-10
        "
      >

        {partners.map((partner, index) => (

          <div
            key={index}
            className="
              text-gray-500
              text-2xl
              font-bold
            "
          >
            {partner}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Partners;