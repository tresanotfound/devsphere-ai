// server/src/sockets/chatSocket.js

import Message
from "../models/Message.js";



/* =========================================
   ONLINE USERS
========================================= */

const onlineUsers =
  new Map();



/* =========================================
   CHAT SOCKET
========================================= */

const chatSocket = (

  io,
  socket

) => {

  console.log(
    "💬 Chat Socket Connected:",
    socket.id
  );



  /* =========================================
     USER CONNECT
  ========================================= */

  socket.on(

    "join",

    (userId) => {

      onlineUsers.set(

        userId,

        socket.id
      );



      console.log(
        `🟢 User Online: ${userId}`
      );



      // SEND ONLINE USERS

      io.emit(

        "online-users",

        Array.from(
          onlineUsers.keys()
        )
      );
    }
  );



  /* =========================================
     SEND MESSAGE
  ========================================= */

  socket.on(

    "send-message",

    async (data) => {

      try {

        const {

          sender,
          receiver,
          message,

        } = data;



        // SAVE MESSAGE

        const newMessage =
          await Message.create({

            sender,
            receiver,
            message,
          });



        // POPULATE USERS

        const populatedMessage =
          await Message.findById(

            newMessage._id
          )

          .populate(
            "sender",
            "name avatar"
          )

          .populate(
            "receiver",
            "name avatar"
          );



        // RECEIVER SOCKET

        const receiverSocketId =

          onlineUsers.get(
            receiver
          );



        // SEND TO RECEIVER

        if (receiverSocketId) {

          io.to(
            receiverSocketId
          ).emit(

            "receive-message",

            populatedMessage
          );
        }



        // SEND BACK TO SENDER

        socket.emit(

          "message-sent",

          populatedMessage
        );

      } catch (error) {

        console.log(
          "❌ Socket Message Error:",
          error.message
        );
      }
    }
  );



  /* =========================================
     TYPING INDICATOR
  ========================================= */

  socket.on(

    "typing",

    (data) => {

      const {
        receiver,
        senderName,
      } = data;



      const receiverSocketId =

        onlineUsers.get(
          receiver
        );



      if (receiverSocketId) {

        io.to(
          receiverSocketId
        ).emit(

          "user-typing",

          senderName
        );
      }
    }
  );



  /* =========================================
     STOP TYPING
  ========================================= */

  socket.on(

    "stop-typing",

    (receiver) => {

      const receiverSocketId =

        onlineUsers.get(
          receiver
        );



      if (receiverSocketId) {

        io.to(
          receiverSocketId
        ).emit(
          "stop-typing"
        );
      }
    }
  );



  /* =========================================
     DISCONNECT
  ========================================= */

  socket.on(

    "disconnect",

    () => {

      for (

        const [

          userId,
          socketId,

        ]

        of onlineUsers.entries()

      ) {

        if (
          socketId === socket.id
        ) {

          onlineUsers.delete(
            userId
          );

          console.log(
            `🔴 User Offline: ${userId}`
          );

          break;
        }
      }



      // UPDATE ONLINE USERS

      io.emit(

        "online-users",

        Array.from(
          onlineUsers.keys()
        )
      );
    }
  );
};



export default chatSocket;