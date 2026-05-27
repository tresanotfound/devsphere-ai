// ======================================
// SUCCESS LOGGER
// ======================================

export const logSuccess =
  (message) => {

    console.log(
      `✅ SUCCESS: ${message}`
    );
  };


// ======================================
// ERROR LOGGER
// ======================================

export const logError =
  (message) => {

    console.error(
      `❌ ERROR: ${message}`
    );
  };


// ======================================
// INFO LOGGER
// ======================================

export const logInfo =
  (message) => {

    console.log(
      `ℹ️ INFO: ${message}`
    );
  };