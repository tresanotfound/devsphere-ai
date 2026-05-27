// ======================================
// SEND EMAIL SERVICE
// ======================================

export const sendEmail =
  async ({
    to,
    subject,
    text,
  }) => {

    // TEMP EMAIL MOCK

    console.log("📧 Email Sent");

    console.log("To:", to);

    console.log(
      "Subject:",
      subject
    );

    console.log("Text:", text);

    return true;
  };