function CodeGenerator() {

  return (
    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-6
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        AI Code Generator
      </h2>

      <div
        className="
          bg-black
          rounded-xl
          p-5
          text-green-400
          font-mono
          overflow-auto
        "
      >

{`function greet() {
  console.log('Hello DevSphere AI');
}`}

      </div>

    </div>
  );
}

export default CodeGenerator;