let io;


// ======================================
// SET SOCKET INSTANCE
// ======================================

export const setSocketInstance =
  (socketInstance) => {

    io = socketInstance;
  };


// ======================================
// GET SOCKET INSTANCE
// ======================================

export const getSocketInstance =
  () => {

    if (!io) {

      throw new Error(
        "Socket.io not initialized"
      );
    }

    return io;
  };