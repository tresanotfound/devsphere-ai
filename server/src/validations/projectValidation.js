// ======================================
// PROJECT VALIDATION
// ======================================

export const validateProject =
  ({
    title,
    description,
  }) => {

    const errors = [];

    // TITLE

    if (
      !title ||
      title.trim().length < 3
    ) {

      errors.push(
        "Project title must be at least 3 characters"
      );
    }

    // DESCRIPTION

    if (
      description &&
      description.length > 500
    ) {

      errors.push(
        "Description too long"
      );
    }

    return errors;
  };