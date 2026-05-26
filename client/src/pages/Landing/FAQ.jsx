function FAQ() {

  const faqs = [
    'What is DevSphere AI?',
    'How does AI workspace work?',
    'Is realtime chat supported?',
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
        FAQ ❓
      </h1>

      <div className="space-y-5">

        {faqs.map((faq, index) => (

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
            {faq}
          </div>

        ))}

      </div>

    </div>

  );
}

export default FAQ;