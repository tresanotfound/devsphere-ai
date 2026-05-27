// ======================================
// AI ASSISTANT CONTROLLER
// ======================================

export const askAI = async (
  req,
  res
) => {

  try {

    const { prompt } = req.body;

    if (!prompt) {

      return res.status(400).json({

        success: false,

        message:
          "Prompt is required",

      });
    }

    // TEMP AI RESPONSE

    const aiResponse = `
      DevSphere AI received:
      ${prompt}
    `;

    res.status(200).json({

      success: true,

      response: aiResponse,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });
  }
};