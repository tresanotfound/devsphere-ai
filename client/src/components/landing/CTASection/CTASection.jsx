import Button from '../../common/Button/Button';

function CTASection() {

  return (
    <section className="py-24 px-6 bg-[#111827]">

      <div className="max-w-4xl mx-auto text-center">

        <h2
          className="
            text-5xl
            font-bold
            text-white
          "
        >
          Start Building Smarter Today
        </h2>

        <p className="text-gray-400 mt-6">
          Join thousands of developers using DevSphere AI.
        </p>

        <Button className="mt-10">
          Get Started
        </Button>

      </div>

    </section>
  );
}

export default CTASection;