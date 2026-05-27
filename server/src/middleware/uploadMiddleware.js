import multer from "multer";

import path from "path";


// STORAGE CONFIG

const storage =
  multer.diskStorage({

    destination:
      function (
        req,
        file,
        cb
      ) {

        cb(
          null,
          "src/uploads/"
        );
      },

    filename:
      function (
        req,
        file,
        cb
      ) {

        cb(

          null,

          Date.now() +
            path.extname(
              file.originalname
            )
        );
      },

  });


// FILE FILTER

const fileFilter =
  (
    req,
    file,
    cb
  ) => {

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      allowedTypes.includes(
        file.mimetype
      )
    ) {

      cb(null, true);

    } else {

      cb(
        new Error(
          "Invalid file type"
        ),
        false
      );
    }
  };


// MULTER INSTANCE

const upload =
  multer({

    storage,

    fileFilter,

    limits: {
      fileSize:
        5 * 1024 * 1024,
    },

  });

export default upload;