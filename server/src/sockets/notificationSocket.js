// server/src/sockets/notificationSocket.js

import Notification
from "../models/Notification.js";



/* =========================================
   ONLINE USERS
========================================= */

const notificationUsers =
  new Map();



/* =========================================
   NOTIFICATION SOCKET
========================================= */

const notificationSocket = (

  io,
  socket

) => {

  console.log(
    "🔔 Notification Socket Connected:",
    socket.id
  );



  /* =========================================
     REGISTER USER
  ========================================= */

  socket.on(

    "register-notification-user",

    (userId) => {

      notificationUsers.set(

        userId,

        socket.id
      );



      console.log(
        `🟢 Notification User Online: ${userId}`
      );
    }
  );



  /* =========================================
     SEND NOTIFICATION
  ========================================= */

  socket.on(

    "send-notification",

    async (data) => {

      try {

        const {

          recipient,
          sender,
          type,
          title,
          message,
          link,

        } = data;



        /* =========================================
           SAVE TO DATABASE
        ========================================= */

        const notification =
          await Notification.create({

            recipient,
            sender,
            type,
            title,
            message,
            link,
          });



        /* =========================================
           POPULATE SENDER
        ========================================= */

        const populatedNotification =
          await Notification.findById(

            notification._id
          )

          .populate(

            "sender",

            "name avatar"
          );



        /* =========================================
           FIND RECEIVER SOCKET
        ========================================= */

        const receiverSocketId =

          notificationUsers.get(
            recipient
          );



        /* =========================================
           SEND REALTIME NOTIFICATION
        ========================================= */

        if (receiverSocketId) {

          io.to(
            receiverSocketId
          ).emit(

            "receive-notification",

            populatedNotification
          );



          // UPDATE UNREAD COUNT

          const unreadCount =
            await Notification.countDocuments({

              recipient,

              read: false,
            });

          io.to(
            receiverSocketId
          ).emit(

            "notification-unread-count",

            unreadCount
          );
        }

      } catch (error) {

        console.log(
          "❌ Notification Socket Error:",
          error.message
        );
      }
    }
  );



  /* =========================================
     MARK AS READ
  ========================================= */

  socket.on(

    "mark-notification-read",

    async (notificationId) => {

      try {

        const notification =
          await Notification.findByIdAndUpdate(

            notificationId,

            {

              read: true,
            },

            {

              new: true,
            }
          );



        if (!notification)
          return;



        const receiverSocketId =

          notificationUsers.get(

            notification.recipient.toString()
          );



        if (receiverSocketId) {

          const unreadCount =
            await Notification.countDocuments({

              recipient:
                notification.recipient,

              read: false,
            });

          io.to(
            receiverSocketId
          ).emit(

            "notification-unread-count",

            unreadCount
          );
        }

      } catch (error) {

        console.log(
          "❌ Mark Read Error:",
          error.message
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

        of notificationUsers.entries()

      ) {

        if (
          socketId === socket.id
        ) {

          notificationUsers.delete(
            userId
          );

          console.log(
            `🔴 Notification User Offline: ${userId}`
          );

          break;
        }
      }
    }
  );
};



export default notificationSocket;