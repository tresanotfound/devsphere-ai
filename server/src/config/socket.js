// server/src/config/socket.js

import { Server }
from "socket.io";

let io;



/* =========================================
   INITIALIZE SOCKET
========================================= */

export const initSocket =
  (server) => {

    io =
      new Server(server, {

        cors: {

          origin:
            "http://localhost:5173",

          methods: [

            "GET",
            "POST",
            "PUT",
            "DELETE",
          ],

          credentials: true,
        },

        transports: [

          "websocket",
          "polling",
        ],
      });



    /* =========================================
       CONNECTION
    ========================================= */

    io.on(

      "connection",

      (socket) => {

        console.log(
          `⚡ User Connected: ${socket.id}`
        );



        /* =========================================
           DISCONNECT
        ========================================= */

        socket.on(

          "disconnect",

          () => {

            console.log(
              `❌ User Disconnected: ${socket.id}`
            );
          }
        );
      }
    );



    return io;
  };



/* =========================================
   GET SOCKET INSTANCE
========================================= */

export const getIO =
  () => {

    if (!io) {

      throw new Error(
        "Socket.io not initialized!"
      );
    }

    return io;
  };