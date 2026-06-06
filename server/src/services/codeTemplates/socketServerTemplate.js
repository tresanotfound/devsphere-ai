export const socketServerTemplate = () => {

  return `
import { Server } from "socket.io";

export const initializeSocket =
  (server) => {

    const io =
      new Server(server, {

        cors: {

          origin:
            "http://localhost:5173",

          methods: [
            "GET",
            "POST",
          ],
        },
      });

    io.on(
      "connection",
      (socket) => {

        console.log(
          "User Connected:",
          socket.id
        );

        socket.on(
          "disconnect",
          () => {

            console.log(
              "User Disconnected:",
              socket.id
            );
          }
        );
      }
    );

    return io;
  };
`;
};