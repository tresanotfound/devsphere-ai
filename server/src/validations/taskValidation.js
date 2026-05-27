// ======================================
// TASK VALIDATION
// ======================================

export const validateTask =
  ({
    title,
    priority,
  }) => {

    const errors = [];

    // TITLE

    if (
      !title ||
      title.trim().length < 3
    ) {

      errors.push(
        "Task title must be at least 3 characters"
      );
    }

    // PRIORITY

    const allowedPriorities = [

      "low",
      "medium",
      "high",

    ];

    if (
      priority &&
      !allowedPriorities.includes(
        priority
      )
    ) {

      errors.push(
        "Invalid priority"
      );
    }

    return errors;
  };