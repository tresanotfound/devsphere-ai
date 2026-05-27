// ======================================
// USER PROFILE VALIDATION
// ======================================

export const validateUserProfile =
  ({
    name,
    bio,
  }) => {

    const errors = [];

    // NAME

    if (
      name &&
      name.trim().length < 2
    ) {

      errors.push(
        "Name must be at least 2 characters"
      );
    }

    // BIO

    if (
      bio &&
      bio.length > 300
    ) {

      errors.push(
        "Bio cannot exceed 300 characters"
      );
    }

    return errors;
  };