const validationMiddleware =
  (req, res, next) => {

    const errors = [];

    // SIMPLE VALIDATION

    if (
      req.body.email &&
      !req.body.email.includes("@")
    ) {

      errors.push(
        "Invalid email format"
      );
    }

    if (
      req.body.password &&
      req.body.password.length < 6
    ) {

      errors.push(
        "Password must be at least 6 characters"
      );
    }

    if (errors.length > 0) {

      return res.status(400).json({

        success: false,

        errors,

      });
    }

    next();
  };

export default validationMiddleware;