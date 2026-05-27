// ======================================
// EMAIL VALIDATION
// ======================================

export const validateEmail =
  (email) => {

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  };


// ======================================
// PASSWORD VALIDATION
// ======================================

export const validatePassword =
  (password) => {

    return (
      password.length >= 6
    );
  };