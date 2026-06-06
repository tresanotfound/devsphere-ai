export const expressRouteTemplate = () => {

  return `
import express from "express";

const router =
  express.Router();

router.get(
  "/",
  async (req, res) => {

    try {

      res.status(200).json({

        success: true,

        message:
          "Route working",
      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,
      });
    }
  }
);

export default router;
`;
};