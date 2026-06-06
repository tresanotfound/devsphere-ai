export const controllerTemplate = () => {

  return `
export const getData =
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        data: [],
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };

export const createData =
  async (req, res) => {

    try {

      const data =
        req.body;

      res.status(201).json({

        success: true,

        data,
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  };
`;
};