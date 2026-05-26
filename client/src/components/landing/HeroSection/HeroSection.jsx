import Button from '../../common/Button/Button';

function HeroSection() {

  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-[#111827]
      "
    >

      <h1
        className="
          text-5xl
          md:text-7xl
          font-extrabold
          text-white
          leading-tight
          max-w-5xl
        "
      >
        Build Smarter With
        <span className="text-[#b9ff66]">
          {' '}DevSphere AI
        </span>
      </h1>

      <p
        className="
          text-gray-400
          text-lg
          md:text-xl
          mt-8
          max-w-2xl
        "
      >
        The AI-powered productivity platform
        for developers, teams, and creators.
      </p>

      <div className="flex gap-5 mt-10">

        <Button>
          Get Started
        </Button>

        <Button variant="secondary">
          Live Demo
        </Button>

      </div>

    </section>
  );
}

export default HeroSection;