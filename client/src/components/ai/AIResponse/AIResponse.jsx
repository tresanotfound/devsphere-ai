import {
  FiCpu,
} from "react-icons/fi";

function AIResponse({

  response,

}) {

  return (

    <div
      className="
        glass-card
        rounded-3xl
        p-8
        min-h-[500px]
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
        "
      >

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-[#b9ff66]
            text-black
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FiCpu />
        </div>

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-black
              dark:text-white
            "
          >
            AI Response
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
              mt-1
            "
          >
            Intelligent workflow generation output.
          </p>

        </div>

      </div>



      {/* EMPTY STATE */}

      {

        !response

        && (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-24
            "
          >

            <div
              className="
                w-28
                h-28
                rounded-full
                bg-[#b9ff66]/10
                flex
                items-center
                justify-center
                text-6xl
                mb-8
              "
            >
              🤖
            </div>

            <h3
              className="
                text-3xl
                font-bold
                text-black
                dark:text-white
              "
            >
              Awaiting AI Prompt
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-gray-600
                dark:text-gray-400
                text-lg
              "
            >
              Enter your project idea
              and DevSphere AI will
              generate an intelligent
              workflow plan instantly.
            </p>

          </div>
        )
      }



      {/* RESPONSE */}

      {

        response

        && (

          <div
            className="
              prose
              prose-lg
              max-w-none
              dark:prose-invert
              whitespace-pre-wrap
              text-black
              dark:text-white
              leading-relaxed
            "
          >

            {response}

          </div>
        )
      }

    </div>
  );
}

export default AIResponse;