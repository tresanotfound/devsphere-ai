// ======================================
// REGISTER VALIDATION
// ======================================

export const validateRegister =
  ({
    name,
    email,
    password,
  }) => {

    const errors = [];

    // NAME

    if (
      !name ||
      name.trim().length < 2
    ) {

      errors.push(
        "Name must be at least 2 characters"
      );
    }

    // EMAIL

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !email ||
      !emailRegex.test(email)
    ) {

      errors.push(
        "Valid email is required"
      );
    }

    // PASSWORD

    if (
      !password ||
      password.length < 6
    ) {

      errors.push(
        "Password must be at least 6 characters"
      );
    }

    return errors;
  };


// ======================================
// LOGIN VALIDATION
// ======================================

export const validateLogin =
  ({
    email,
    password,
  }) => {

    const errors = [];

    if (!email) {

      errors.push(
        "Email is required"
      );
    }

    if (!password) {

      errors.push(
        "Password is required"
      );
    }

    return errors;
  };