// client/src/components/projects/ProjectFiles/ProjectFiles.jsx

import {
  FiUpload,
  FiFile,
  FiDownload,
} from "react-icons/fi";

function ProjectFiles({

  project,

}) {

  return (

    <div
      className="
        glass-card
        p-6
        rounded-3xl
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
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
            <FiFile />
          </div>

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-black
                dark:text-white
              "
            >
              Project Files
            </h2>

            <p
              className="
                text-gray-600
                dark:text-gray-400
              "
            >
              Upload and manage resources
            </p>

          </div>

        </div>

        {/* UPLOAD BUTTON */}

        <button
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-[#b9ff66]
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >

          <FiUpload />

          Upload

        </button>

      </div>

      {/* EMPTY STATE */}

      {

        (!project.files

          ||

          project.files.length === 0)

        && (

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-16
              border-2
              border-dashed
              border-black/10
              dark:border-white/10
              rounded-3xl
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-full
                bg-[#b9ff66]/20
                flex
                items-center
                justify-center
                text-4xl
                text-[#7ed321]
                mb-5
              "
            >
              <FiUpload />
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-black
                dark:text-white
              "
            >
              No Files Uploaded
            </h3>

            <p
              className="
                mt-3
                text-gray-600
                dark:text-gray-400
                text-center
                max-w-md
              "
            >
              Upload documents,
              images, resources,
              and project assets here.
            </p>

          </div>
        )
      }

      {/* FILE LIST */}

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >

        {

          project.files?.map(

            (file, index) => (

              <div

                key={index}

                className="
                  flex
                  items-center
                  justify-between
                  p-5
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  border
                  border-black/10
                  dark:border-white/10
                "
              >

                {/* FILE INFO */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-[#b9ff66]/20
                      text-[#7ed321]
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FiFile />
                  </div>

                  <div>

                    <h3
                      className="
                        font-semibold
                        text-black
                        dark:text-white
                      "
                    >
                      {file.name}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Project Resource
                    </p>

                  </div>

                </div>

                {/* DOWNLOAD */}

                <a

                  href={file.url}

                  target="_blank"

                  rel="noreferrer"

                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-2xl
                    bg-[#b9ff66]
                    text-black
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >

                  <FiDownload />

                  Download

                </a>

              </div>
            ))
        }

      </div>

    </div>
  );
}

export default ProjectFiles;